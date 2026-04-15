<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset, SidebarSeparator } from '@/components/ui/sidebar'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
</script>

<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <!-- Topbar -->
            <header class="flex h-14 shrink-0 items-center gap-2 px-4">
                <SidebarTrigger class="-ml-1 cursor-pointer" />
                <div class="h-4 w-px bg-border" />
                <!-- Breadcrumb via slot o composable -->
                <slot name="header" />
                <div class="ml-auto flex items-center gap-2">
                    <slot name="actions" />
                </div>
            </header>

            <SidebarSeparator />

            <!-- Page content -->
            <main class="flex flex-1 flex-col gap-4 p-4">
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>