import { useAuthApi } from "../api/auth"

export default defineNuxtRouteMiddleware(async (to) => {
    const store = useAuthStore()
    const publicRoutes = ['/login']
    const isPublicRoute = publicRoutes.includes(to.path)

    if (store.user) {
        return isPublicRoute ? navigateTo('/dashboard') : undefined
    }

    try {
        const { me } = useAuthApi()
        const user = await me()
        store.setUser(user)

        if (isPublicRoute) return navigateTo('/dashboard')
    } catch {
        if (!isPublicRoute) return navigateTo('/login')
    }
})