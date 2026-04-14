import { defineStore } from "pinia"
import { useAuthApi } from "../api/auth"
import type { Login } from "../types/auth"
import type { User } from "../types/user"

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    const isAuthenticated = computed(() => !!user.value)
    const fullName = computed(() =>
        user.value ? `${user.value.firstName} ${user.value.lastName}` : ''
    )

    function setUser(userData: User) {
        user.value = userData
    }

    function clearUser() {
        user.value = null
    }

    async function login(credentials: Login) {
        const authApi = useAuthApi()
        await authApi.login(credentials)
        const userData = await authApi.me()
        setUser(userData)
    }

    async function logout() {
        const authApi = useAuthApi()
        await authApi.logout()
        clearUser()
    }

    return {
        user,
        isAuthenticated,
        fullName,
        login,
        logout,
        setUser,
        clearUser
    }
})