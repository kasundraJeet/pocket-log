<script setup>
import { Icon } from '@iconify/vue'
import { useUrlStore } from '@/stores'
import { Button } from '@/components/ui/button';

const urlStore = useUrlStore()
</script>

<template>
  <main class="w-full h-dvh flex items-center justify-center">
    <div  v-if="urlStore.isError" class="space-y-3 text-center">
      <Icon icon="carbon:error" class="w-16 h-16 mx-auto"/>
      <Button>
        <RouterLink to="/">Back To Home</RouterLink>
      </Button>
    </div>
    <Icon icon="ri:loader-fill" class="animate-spin w-16 h-16" v-else />
  </main>
</template>
