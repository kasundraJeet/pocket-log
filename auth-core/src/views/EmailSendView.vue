<script setup>
import FormWrapper from '@/components/custom/FormWrapper.vue'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
</script>

<template>
  <FormWrapper>
    <div class="p-6 md:p-8">
      <div class="flex flex-col justify-between h-96">
        <div class="space-y-3 flex flex-col justify-center items-center">
          <Icon icon="ri:mail-send-line" class="w-14 h-14" />
          <p class="text-center text-base text-muted-foreground">
            Your email has been successfully sent to
            <b class="text-primary">{{
              authStore.lastValue ? authStore.lastValue.email : 'your mail'
            }}</b
            >.
          </p>
        </div>
        <Button as-child>
          <RouterLink to="/sign-in">
            <Icon icon="ri:arrow-left-long-line" />
            Back To Login
          </RouterLink>
        </Button>
      </div>
    </div>
  </FormWrapper>
</template>
