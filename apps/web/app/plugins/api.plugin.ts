export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: config.public.apiBase,
        credentials: 'include',

        async onResponseError({ request, options, response }) {
            if (request.toString().includes('/auth/refresh')) {
                return
            }

            if (response.status === 401 && import.meta.client) {
                try {
                    await $fetch('/auth/refresh', {
                        baseURL: config.public.apiBase,
                        method: 'POST',
                        credentials: 'include'
                    })

                    return $fetch(request, {
                        ...options,
                        method: options.method as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
                        credentials: 'include'
                    })
                } catch (refreshError) {
                    await navigateTo('/login')
                }
            }
        }
    })

    return {
        provide: {
            api
        }
    }
})