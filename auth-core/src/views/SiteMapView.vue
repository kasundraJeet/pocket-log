<script setup>
import FormWrapper from '@/components/custom/FormWrapper.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <FormWrapper>
    <div class="space-y-4 p-6 md:p-8">
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/">Home</RouterLink>
      </Button>
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/sign-in">Sign In</RouterLink>
      </Button>
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/sign-up">Sign up</RouterLink>
      </Button>
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/forget-password">Forget password</RouterLink>
      </Button>
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/reset-password">Reset password</RouterLink>
      </Button>
      <Button variant="outline" class="w-full" as-child>
        <RouterLink to="/email">Email send</RouterLink>
      </Button>
    </div>
  </FormWrapper>
</template>
