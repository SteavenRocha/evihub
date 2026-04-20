<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()

const { login, loading, error } = useAuth()

const form = reactive({
    email: '',
    password: ''
})

watch([() => form.email, () => form.password], () => {
    if (error.value) error.value = ''
})
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8" @submit.prevent="login(form)">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">
                                Bienvenido de vuelta
                            </h1>
                            <p class="text-muted-foreground text-balance">
                                Inicia sesión en tu cuenta de Evihub
                            </p>
                        </div>

                        <Field>
                            <FieldLabel for="email">Email</FieldLabel>
                            <Input id="email" v-model="form.email" type="email" placeholder="tu@empresa.com" required
                                autocomplete="email" />
                        </Field>

                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="password">Password</FieldLabel>
                            </div>
                            <Input id="password" v-model="form.password" type="password" required
                                autocomplete="current-password" />
                        </Field>

                        <p v-if="error" class="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                            {{ error }}
                        </p>

                        <Field>
                            <Button type="submit" class="w-full cursor-pointer" :disabled="loading">
                                {{ loading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
                            </Button>
                        </Field>

                        <FieldDescription class="text-center">
                            Aplicativo desarrollado por
                            <a href="https://orcronics.com" target="_blank">Orcronics</a>
                            - Todos los derechos reservados.
                        </FieldDescription>
                    </FieldGroup>
                </form>
                <div class="bg-muted relative hidden md:block">
                    <img src="/assets/img/login-bg.jpg" alt="Image"
                        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale">
                </div>
            </CardContent>
        </Card>
    </div>
</template>