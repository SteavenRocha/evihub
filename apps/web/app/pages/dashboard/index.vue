<script setup lang="ts">
import { FileText, ScanLine } from 'lucide-vue-next'

definePageMeta({ layout: 'default' })
useHead({ title: 'Inicio | Evihub' })
</script>

<template>
    <div class="flex flex-col items-center justify-center h-full gap-8">
        <div class="text-center">
            <h1 class="text-2xl font-semibold tracking-tight">Bienvenido a Evihub</h1>
            <p class="text-sm text-muted-foreground mt-1">¿Qué deseas hacer hoy?</p>
        </div>

        <div class="flex items-center gap-4">
            <NuxtLink to="/evidences/scan">
                <div class="flex flex-col items-center gap-3 cursor-pointer group">
                    <div
                        class="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center transition-colors group-hover:bg-muted/70">
                        <ScanLine class="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <span class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        Registrar pago
                    </span>
                </div>
            </NuxtLink>

            <NuxtLink to="/evidences">
                <div class="flex flex-col items-center gap-3 cursor-pointer group">
                    <div
                        class="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center transition-colors group-hover:bg-muted/70">
                        <FileText class="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <span class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        Ver comprobantes
                    </span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>