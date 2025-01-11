<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push('/dashboard')
})
</script>

<template>
  <h1 class="opacity-0">jeet kasundra</h1>
</template>
