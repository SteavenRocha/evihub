import type { Login } from "../types/auth"

export function useAuth() {
    const store = useAuthStore()
    const loading = ref(false)
    const error = ref('')

    async function login(credentials: Login) {
        loading.value = true
        error.value = ''
        try {
            await store.login(credentials)
            await navigateTo('/dashboard')
        } catch (e: any) {
            error.value = e?.data?.message || 'Credenciales incorrectas'
        } finally {
            loading.value = false
        }
    }

    async function logout() {
        await store.logout()
        await navigateTo('/login')
    }

    return {
        user: computed(() => store.user),
        fullName: computed(() => store.fullName),
        isAuthenticated: computed(() => store.isAuthenticated),
        loading,
        error,
        login,
        logout
    }
}