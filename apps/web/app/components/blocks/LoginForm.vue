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
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()

const { login, loading, error } = useAuth()

const formSchema = toTypedSchema(z.object({
    email: z.string({ error: 'El email es requerido' })
        .min(1, 'El email es requerido')
        .check(z.email({ error: 'Ingresa un email válido' })),
    password: z.string({ error: 'La contraseña es requerida' })
        .min(1, 'La contraseña es requerida'),
}))

const { handleSubmit, errors, defineField } = useForm({
    validationSchema: formSchema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

watch([email, password], () => {
    if (error.value) error.value = ''
})

const handleLogin = handleSubmit(async (values) => {
    await login(values)
})
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8" novalidate @submit.prevent="handleLogin">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">Bienvenido de vuelta</h1>
                            <p class="text-muted-foreground text-balance">
                                Inicia sesión en tu cuenta de Evihub
                            </p>
                        </div>

                        <Field>
                            <FieldLabel for="email">Email</FieldLabel>
                            <Input id="email" v-model="email" v-bind="emailAttrs" type="email"
                                placeholder="tu@empresa.com" autocomplete="email" />
                            <p v-if="errors.email" class="text-xs text-destructive mt-[-4px]">
                                {{ errors.email }}
                            </p>
                        </Field>

                        <Field>
                            <FieldLabel for="password">Contraseña</FieldLabel>
                            <Input id="password" v-model="password" v-bind="passwordAttrs" type="password"
                                autocomplete="current-password" />
                            <p v-if="errors.password" class="text-xs text-destructive mt-[-4px]">
                                {{ errors.password }}
                            </p>
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