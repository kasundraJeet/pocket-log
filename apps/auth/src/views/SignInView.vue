<script setup>
import FormWrapper from '@/components/custom/FormWrapper.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Icon } from '@iconify/vue'
import { supabase } from '@/utils/supabase'
import { toast } from 'vue-sonner'
import { useAuthStore, useUrlStore } from '@/stores'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { ref } from 'vue'

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
  }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const isLoading = ref(false)
const authStore = useAuthStore()
const urlStore = useUrlStore()

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  try {
    authStore.setLastForm(values)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    if (error) {
      console.error('Error signing in:', error.message)
      toast.error(error.message)
    } else {
      const modifyObject = {
        token: data.session.access_token,
        expires_at: data.session.expires_at,
        refresh_token: data.session.refresh_token,
        token_type: data.session.token_type
      }
      urlStore.setsession(modifyObject)
      toast.success('Login successful! Welcome back.')
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
          <h1 class="text-2xl font-bold">Welcome back</h1>
          <p class="text-balance text-muted-foreground">Login to your PocketLog account</p>
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
          <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <div class="flex items-center">
                <FormLabel>Password</FormLabel>
                <RouterLink to="/forget-password" class="ml-auto text-sm underline-offset-2 hover:underline">Forgot your
                  password?
                </RouterLink>
              </div>
              <FormControl>
                <Input type="password" placeholder="*****" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <Button type="submit" :disabled="isLoading">
          <Icon icon="ri:loader-fill" class="animate-spin" v-if="isLoading" />
          Sign In
        </Button>
        <Separator label="Or continue with" />
        <div class="space-y-1">
          <Button type="button" variant="outline" class="w-full" :disabled="isLoading">
            <Icon icon="ri:google-line" class="!w-5 !h-5" />
            Login with Google
          </Button>
        </div>
        <div class="text-center text-sm">
          Don&apos;t have an account?
          <RouterLink to="/sign-up" class="underline hover:text-primary underline-offset-4">
            Sign up
          </RouterLink>
        </div>
      </div>
    </form>
  </FormWrapper>
</template>
