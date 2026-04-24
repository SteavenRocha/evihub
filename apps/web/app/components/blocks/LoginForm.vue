<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
        <Card>
            <CardHeader class="text-center">
                <CardTitle class="text-xl">Bienvenido de vuelta</CardTitle>
                <CardDescription>
                    Inicia sesión en tu cuenta de Evihub
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form novalidate @submit.prevent="handleLogin">
                    <FieldGroup>

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
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
        <FieldDescription class="text-center">
            Aplicativo desarrollado por
            <a href="https://orcronics.com" target="_blank">Orcronics</a>
            — Todos los derechos reservados.
        </FieldDescription>
    </div>
</template>