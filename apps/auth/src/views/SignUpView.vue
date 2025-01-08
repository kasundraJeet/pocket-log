<script setup>
import FormWrapper from '@/components/custom/FormWrapper.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { supabase } from '@/utils/supabase'
import { Icon } from '@iconify/vue'
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

const router = useRouter()
const isLoading = ref(false)
const authStore = useAuthStore()

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true

  try {
    authStore.setLastForm(values)
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    }, {
      redirectTo: `${import.meta.env.VITE_PANEL_DOMAIN}`,
    })

    if (error) {
      console.error('Error signing up:', error.message)
      toast.error(error.message)
    } else {
      router.push({ name: 'emailsend' })
      toast.success('Sign up successful! Check your email for confirmation.')
    }
  } catch (e) {
    console.error('Unexpected error:', e)
    toast.error('Something went wrong. Please try again later.')
  } finally {
    isLoading.value = false
  }
})

async function githubSignUp() {
  isLoading.value = true

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })

    if (error) {
      console.error('Error signing up:', error.message)
      toast.error(error.message)
    } else {
      console.log('Sign up success:', data)
      toast.success('Sign up successful! Check your email for confirmation.')
    }
  } catch (e) {
    console.error('Unexpected error:', e)
    toast.error('Something went wrong. Please try again later.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <FormWrapper>
    <form class="p-6 md:p-8" @submit="onSubmit">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-2xl font-bold">Crete Account</h1>
          <p class="text-balance text-muted-foreground">Crete account to your PocketLog account</p>
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
          Crete Account
        </Button>
        <Separator label="OR" />
        <div class="space-y-1">
          <Button type="button" variant="outline" class="w-full" :disabled="isLoading" @click="githubSignUp">
            <Icon icon="ri:google-line" class="!w-5 !h-5" />
            Continue with Google
          </Button>
        </div>
        <div class="text-center text-sm">
          Already have an account?
          <RouterLink to="/sign-in" class="underline hover:text-primary underline-offset-4">
            Sign In
          </RouterLink>
        </div>
      </div>
    </form>
  </FormWrapper>
</template>
