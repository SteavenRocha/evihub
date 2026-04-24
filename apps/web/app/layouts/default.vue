<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset class="min-w-0">
            <!-- Topbar -->
            <header class="bg-background sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger class="-ml-1 cursor-pointer" />
                <div class="h-4 w-px bg-border" />
                <!-- Breadcrumb via slot o composable -->
                <slot name="header" />
                <div class="ml-auto flex items-center gap-2">
                    <slot name="actions" />
                </div>
            </header>

            <!-- Page content -->
            <div class="flex flex-1 flex-col gap-4 px-6 py-8 overflow-y-auto">
                <div class="w-full max-w-7xl mx-auto">
                    <slot />
                </div>
            </div>
        </SidebarInset>

        <Toaster position="top-right" />
    </SidebarProvider>
</template>