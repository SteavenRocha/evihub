type ApiFetch = <T = any>(
    request: string,
    options?: Parameters<typeof $fetch>[1]
) => Promise<T>

declare module '#app' {
    interface NuxtApp {
        $api: ApiFetch
    }
}

declare module 'nuxt/app' {
    interface NuxtApp {
        $api: ApiFetch
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $api: ApiFetch
    }
}

export { }