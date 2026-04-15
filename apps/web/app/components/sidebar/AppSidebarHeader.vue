<script setup lang="ts">
import {
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarSeparator,
} from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
</script>

<template>
    <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <div
                    class="flex items-center gap-2 py-1 transition-all duration-300 px-2 group-data-[collapsible=icon]:px-0">

                    <div
                        class="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path
                                    d="M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5" />
                                <path d="M11.25 16.25h1.5L12 17z" />
                            </g>
                        </svg>
                    </div>

                    <span
                        class="truncate text-sm font-semibold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
                        Evihub
                    </span>

                    <Badge variant="outline" class="ml-auto font-mono text-[10px] group-data-[collapsible=icon]:hidden">
                        v2.0
                    </Badge>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
    <SidebarSeparator />
</template>