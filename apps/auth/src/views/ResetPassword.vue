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
  z
    .object({
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
      confirmPassword: z
        .string()
        .min(8, 'Confirm Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Confirm Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Confirm Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Confirm Password must contain at least one number'),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'The passwords did not match',
          path: ['confirmPassword'],
        })
      }
    }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const router = useRouter()
const isLoading = ref(false)
const authStore = useAuthStore()
const input1 = ref(false)
const input2 = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true

  try {
    const { data, error } = await supabase.auth.api.updateUser(authStore.user.id, {
      password: values.password,
    })

    if (error) {
      console.error(error.message)
      toast.error(error.message)
    } else {
      console.log('Password reset success:', data)
      toast.success('Password reset successful!')
      router.push({ name: 'signIn' })
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
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-2xl font-bold">Reset Your Password</h1>
          <p class="text-balance text-muted-foreground">Enter your new password</p>
        </div>
        <div class="space-y-4 mb-28">
          <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div class="relative w-full">
                  <Input
                    :type="input1 ? 'text' : 'password'"
                    placeholder="New Password"
                    v-bind="componentField"
                  />
                  <div class="absolute inset-y-0 end-1 mt-0.5">
                    <Button
                      variant="ghost"
                      type="button"
                      class="max-w-8 max-h-8"
                      size="icon"
                      @click="input1 = !input1"
                    >
                      <Icon :icon="!input1 ? 'ri:eye-line' : 'ri:eye-close-line'" />
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField
            v-slot="{ componentField }"
            name="confirmPassword"
            :validate-on-blur="!isFieldDirty"
          >
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div class="relative w-full">
                  <Input
                    :type="input2 ? 'text' : 'password'"
                    placeholder="confirm Password"
                    v-bind="componentField"
                  />
                  <div class="absolute inset-y-0 end-1 mt-0.5">
                    <Button
                      variant="ghost"
                      type="button"
                      class="max-w-8 max-h-8"
                      size="icon"
                      @click="input2 = !input2"
                    >
                      <Icon :icon="!input2 ? 'ri:eye-line' : 'ri:eye-close-line'" />
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <Button type="submit" :disabled="isLoading">
          <Icon icon="ri:loader-fill" class="animate-spin" v-if="isLoading" />
          Reset Password
        </Button>
      </div>
    </form>
  </FormWrapper>
</template>
