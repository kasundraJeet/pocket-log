<script setup>
import FormWrapper from '@/components/custom/FormWrapper.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { supabase } from '@/utils/supabase'
import { toast } from 'vue-sonner'
import { useAuthStore } from '@/stores'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email('Invalid email address'),
  }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const router = useRouter()
const isLoading = ref(false)
const authStore = useAuthStore()

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true

  try {
    authStore.setLastForm(values)
    const { data, error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: 'http://localhost:5173/reset-password',
    })

    if (error) {
      console.error('Error resetting password:', error.message)
      toast.error(error.message)
    } else {
      router.push({ name: 'emailsend' })
      console.log('Password reset request successful:', data)
      toast.success('Password reset email sent! Please check your inbox.')
    }
  } catch (e) {
    console.error('Unexpected error:', e)
    toast.error('Something went wrong. Please try again later.')
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <FormWrapper>
    <form class="p-6 md:p-8" @submit="onSubmit">
      <div class="flex flex-col justify-between h-96 gap-8">
        <div class="space-y-6">
          <div class="flex flex-col items-center text-center">
            <h1 class="text-2xl font-bold">Forget Password</h1>
            <p class="text-balance text-muted-foreground">Enter your email to Reset Password</p>
          </div>
          <div class="space-y-7">
            <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        <div class="space-y-2">
          <Button type="submit" class="w-full" :disabled="isLoading">
            <Icon icon="ri:loader-fill" class="animate-spin" v-if="isLoading" />
            Reset Password
          </Button>
          <Button class="w-full" variant="outline" as-child>
            <RouterLink to="/sign-in">
              <Icon icon="ri:arrow-left-long-line" />
              Back To Login
            </RouterLink>
          </Button>
        </div>
      </div>
    </form>
  </FormWrapper>
</template>
