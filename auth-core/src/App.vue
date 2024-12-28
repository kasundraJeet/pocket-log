<script setup>
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
console.log(mode)
</script>

<template>
  <RouterView />
</template>
