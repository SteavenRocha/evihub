<script setup lang="ts">
import type { Component } from 'vue'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuBadge,
} from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'

interface NavItem {
    title: string
    href: string
    icon: Component
    badge?: string
    badgeVariant?: 'default' | 'warning'
}

defineProps<{
    label: string
    items: NavItem[]
}>()

const route = useRoute()
</script>

<template>
    <SidebarGroup>
        <SidebarGroupLabel>{{ label }}</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
                <SidebarMenuButton as-child :is-active="route.path === item.href" :tooltip="item.title">
                    <NuxtLink :to="item.href">
                        <component :is="item.icon" class="h-4 w-4" />
                        <span>{{ item.title }}</span>
                    </NuxtLink>
                </SidebarMenuButton>
                <!-- <SidebarMenuBadge v-if="item.badge">
                    <Badge :variant="item.badgeVariant === 'warning' ? 'outline' : 'secondary'" :class="[
                        'h-5 px-1.5 font-mono text-[10px]',
                        item.badgeVariant === 'warning' && 'border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                    ]">
                        {{ item.badge }}
                    </Badge>
                </SidebarMenuBadge> -->
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>