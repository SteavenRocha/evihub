import { useAuthApi } from "../api/auth"

export default defineNuxtRouteMiddleware(async (to) => {
    const store = useAuthStore()
    const publicRoutes = ['/login']
    const isPublicRoute = publicRoutes.includes(to.path)

    if (store.user) {
        if (isPublicRoute || to.path === '/') return navigateTo('/dashboard')
        return undefined
    }

    try {
        const { me } = useAuthApi()
        const user = await me()
        store.setUser(user)

        if (isPublicRoute || to.path === '/') return navigateTo('/dashboard')
    } catch {
        if (!isPublicRoute) return navigateTo('/login')
    }
})