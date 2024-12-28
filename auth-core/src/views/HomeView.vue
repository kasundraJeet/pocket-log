<script setup>
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
</script>

<template>
  <section class="grid grid-cols-3 w-full h-dvh">
    <div class="col-span-2"></div>
    <div class="h-full flex flex-col justify-between bg-background px-5 py-3">
      <div></div>
      <div class="flex gap-2.5">
        <Button class="w-full" as-child>
          <RouterLink to="/sign-in">Login</RouterLink>
        </Button>
        <Button class="w-full" as-child>
          <RouterLink to="/sign-up">Sign Up</RouterLink>
        </Button>
      </div>
      <div class="flex items-center justify-center gap-3">
        <RouterLink to="/" class="text-muted-foreground text-sm">Terms of Service</RouterLink>
        <Separator orientation="vertical" />
        <RouterLink to="/" class="text-muted-foreground text-sm">Privacy Policy</RouterLink>
      </div>
    </div>
  </section>
</template>
