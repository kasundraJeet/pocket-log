<script setup>
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'
import { useSessionStore } from '@/stores'

const route = useRoute()
const routes = useRouter()
const sessionStore = useSessionStore()

const queryParams = route.query
const error = ref(false)

onMounted(() => {
    if (queryParams.token) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('session')
        }
        sessionStore.setSession(queryParams)
    } else {
        error.value = true
        routes.push('/session-close')
    }
})

definePageMeta({
    layout: ''
})
</script>

<template>
    <main class="w-full h-dvh flex items-center justify-center">
        <div v-if="error" class="space-y-3 text-center">
            <Icon icon="carbon:error" class="w-16 h-16 mx-auto" />
            <Button variant="outline">
                <RouterLink to="/">Issues Something wrong</RouterLink>
            </Button>
        </div>
        <Icon v-else icon="ri:loader-fill" class="animate-spin w-16 h-16 " />
    </main>
</template>