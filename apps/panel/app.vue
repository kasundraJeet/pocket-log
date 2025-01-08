<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
