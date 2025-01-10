<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <div class="w-full h-[calc(100dvh-2rem)] flex items-center justify-center">
    <div class="flex flex-col items-center gap-6">
      <div class="space-y-1.5 text-center">
        <h1 class="text-2xl font-bold">Welcome to Pocket Log</h1>
        <p class="text-muted-foreground text-base">Track your expenses and manage your finances effortlessly.</p>
      </div>
      <Button variant="outline">
        <RouterLink to="/dashboard/account">Start with Select Account</RouterLink>
      </Button>
    </div>
  </div>
</template>