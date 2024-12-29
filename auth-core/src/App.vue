<script setup>
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import { Toaster } from '@/components/ui/sonner'

const mode = useColorMode()
console.log(mode)
</script>

<template>
  <Toaster />
  <RouterView />
</template>
