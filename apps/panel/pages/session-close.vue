<script setup>
import { Icon } from '@iconify/vue'

definePageMeta({
    layout: ''
})

onMounted(() => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('session')
    }
    window.location.href = import.meta.env.VITE_AUTH_DOMAIN
})
</script>

<template>
    <main class="w-full h-dvh flex items-center justify-center">
        <Icon icon="ri:loader-fill" class="animate-spin w-16 h-16 " />
    </main>
</template>