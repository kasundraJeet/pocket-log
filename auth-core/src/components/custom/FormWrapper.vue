<script setup>
import SideContent from './SideContent.vue'
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
    <div class="w-full max-w-sm md:max-w-3xl">
      <div class="flex flex-col gap-6">
        <Card class="overflow-hidden">
          <CardContent class="grid p-0 md:grid-cols-2">
            <SideContent />
            <slot />
          </CardContent>
        </Card>
        <div
          class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary"
        >
          By clicking continue, you agree to our
          <RouterLink to="/">Terms of Service</RouterLink> and
          <RouterLink to="/">Privacy Policy</RouterLink>.
        </div>
      </div>
    </div>
  </div>
</template>
