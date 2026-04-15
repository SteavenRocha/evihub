<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarSeparator } from '@/components/ui/sidebar'
import AppSidebarHeader from './AppSidebarHeader.vue'
import AppSidebarNav from './AppSidebarNav.vue'
import AppSidebarFooter from './AppSidebarFooter.vue'
import { useNavigation } from '@/composables/useNavigation'

const { navMain, navManagement, navAccount } = useNavigation()
</script>

<template>
    <Sidebar collapsible="icon">
        <AppSidebarHeader />

        <SidebarContent>
            <AppSidebarNav label="Principal" :items="navMain" />
            <SidebarSeparator />
            <AppSidebarNav label="Gestión" :items="navManagement" />
            <SidebarSeparator />
            <AppSidebarNav label="Cuenta" :items="navAccount" />
        </SidebarContent>

        <AppSidebarFooter />
    </Sidebar>
</template>