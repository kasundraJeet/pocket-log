<script setup>
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { useSessionStore } from '@/stores'

const route = useRoute()
const sessionStore = useSessionStore()

const queryParams = route.query

sessionStore.setSession(queryParams)

definePageMeta({
    layout: ''
})
</script>

<template>
    <main class="w-full h-dvh flex items-center justify-center">
        <Icon icon="ri:loader-fill" class="animate-spin w-16 h-16 " />
    </main>
</template>