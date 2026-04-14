import type { Login, LoginResponse } from "../types/auth"
import type { User } from "../types/user"

export function useAuthApi() {
    const $api = useNuxtApp().$api as typeof $fetch

    return {
        login: (body: Login) =>
            $api<LoginResponse>('/auth/login', { method: 'POST', body }),

        me: () =>
            $api<User>('/auth/me'),

        logout: () =>
            $api('/auth/logout', { method: 'POST' }),

        refresh: () =>
            $api('/auth/refresh', { method: 'POST' }),
    }
}