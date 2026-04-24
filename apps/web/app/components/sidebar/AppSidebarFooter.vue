<script setup lang="ts">
import { LogOut, ChevronsUpDown } from 'lucide-vue-next'
import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator
} from '@/components/ui/sidebar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const { user, fullName, logout } = useAuth()

const initials = computed(() =>
    user.value ? getInitials(user.value.firstName, user.value.lastName) : ''
)
</script>

<template>
    <SidebarSeparator />
    <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <SidebarMenuButton size="lg"
                            class="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Avatar class="size-9 rounded-full">
                                <AvatarFallback class="text-[11px] font-medium">
                                    {{ initials }}
                                </AvatarFallback>
                            </Avatar>
                            <div class="flex flex-col gap-0.5 text-left text-sm leading-none">
                                <span class="font-medium truncate">{{ fullName }}</span>
                                <span class="text-xs text-muted-foreground">{{ user?.role }}</span>
                            </div>
                            <ChevronsUpDown class="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56" side="top" align="end" :side-offset="8">
                        <div class="px-2 py-1.5">
                            <p class="text-sm font-medium">{{ fullName }}</p>
                            <p class="text-xs text-muted-foreground">{{ user?.email }}</p>
                        </div>
                        <DropdownMenuSeparator />
                        <!-- <DropdownMenuItem as-child class="cursor-pointer">
                            <NuxtLink to="/settings">
                                <Settings class="mr-2 h-4 w-4" />
                                Configuración
                            </NuxtLink>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator /> -->
                        <DropdownMenuItem class="cursor-pointer text-destructive focus:text-destructive"
                            @click="logout">
                            <LogOut class="mr-2 h-4 w-4" />
                            Cerrar sesión
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
</template>