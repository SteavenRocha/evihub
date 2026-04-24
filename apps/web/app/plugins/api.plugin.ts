export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()

    type ApiFetch = <T = any>(request: string, options?: any) => Promise<T>

    const baseFetch = $fetch.create({
        baseURL: config.public.apiBase,
        credentials: 'include'
    })

    let isRefreshing = false
    let refreshPromise: Promise<void> | null = null

    const queue: Array<{
        resolve: (value: any) => void
        reject: (reason?: any) => void
        request: string
        options: any
    }> = []

    const processQueue = (error: any = null) => {
        queue.forEach(({ resolve, reject, request, options }) => {
            if (error) {
                reject(error)
            } else {
                baseFetch(request, options)
                    .then(resolve)
                    .catch(reject)
            }
        })
        queue.length = 0
    }

    const api: ApiFetch = async (request, options = {}) => {
        try {
            return await baseFetch(request, options)

        } catch (err: any) {
            const status = err?.response?.status

            if (status !== 401 || (options as any)._retry || request.includes('/auth/refresh')) {
                throw err
            };

            (options as any)._retry = true

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    queue.push({ resolve, reject, request, options })
                })
            }

            isRefreshing = true

            refreshPromise = (async () => {
                try {
                    await baseFetch('/auth/refresh', {
                        method: 'POST'
                    })
                    processQueue()
                } catch (refreshError) {
                    processQueue(refreshError)
                    authStore.clearUser()
                    throw refreshError
                } finally {
                    isRefreshing = false
                    refreshPromise = null
                }
            })()

            await refreshPromise
            return await baseFetch(request, options)
        }
    }

    return {
        provide: { api }
    }
})