<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div data-slot="sidebar-header" data-sidebar="header"
    :class="cn('flex h-14 flex-col border-b gap-2 p-2', props.class)">
    <slot />
  </div>
</template>
