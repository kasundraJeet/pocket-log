<script setup>
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
</script>

<template>
  <main class="w-full h-dvh flex items-center justify-center">
    <div class="space-y-4 flex flex-col items-center justify-center">
      <div class="space-y-3 text-center">
        <h1 class="text-7xl font-bold">404</h1>
        <h4 class="uppercase text-lg">Not Found</h4>
      </div>
      <Button variant="outline" as-child>
        <RouterLink to="/sign-in">
          <Icon icon="ri:arrow-left-long-line" />
          Go Back to Login
        </RouterLink>
      </Button>
    </div>
  </main>
</template>
