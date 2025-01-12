<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

definePageMeta({
    layout: ''
})

const formSchema = toTypedSchema(z.object({
    fname: z.string().min(2).max(15),
    lname: z.string().min(2).max(15),
    country: z.string().min(1, 'Country is required'),
    currency: z.string().min(1, 'Currency is required'),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
}))

async function fetchCountries() {
  try {
    const { data: { countries } } = await useFetch('/api/countries', {
        headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    console.log(countries)
  } catch (error) {
    console.error('Error fetching countries:', error)
  }
}

const { isFieldDirty, handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    console.log(values)
})


const countries = [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Germany', value: 'Germany' },
    { label: 'UK', value: 'UK' }
]

const currencies = [
    { label: 'USD', value: 'USD' },
    { label: 'CAD', value: 'CAD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' }
]

onMounted(() => {
    fetchCountries()
})
</script>

<template>
    <main class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div class="w-full max-w-lg">
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>
                        Initialize Your Profile
                    </CardTitle>
                    <CardDescription>
                        Fill in the details below to set up your profile. This information will help us customize your
                        experience.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form class="space-y-6" @submit="onSubmit">
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <FormField v-slot="{ componentField }" name="fname" :validate-on-blur="!isFieldDirty">
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="First Name" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                                <FormField v-slot="{ componentField }" name="lname" :validate-on-blur="!isFieldDirty">
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Last Name" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <FormField v-slot="{ componentField }" name="country">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Select v-bind="componentField">
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a fruit" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem v-for="country in countries" :key="country.value"
                                                    :value="country.value">
                                                    {{ country.label }}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField }" name="currency">
                                <FormItem>
                                    <FormLabel>Currency</FormLabel>
                                    <FormControl>
                                        <Select v-bind="componentField">
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a fruit" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem v-for="currency in currencies" :key="currency.value"
                                                    :value="currency.value">
                                                    {{ currency.label }}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        You can change any time Currency
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField v-slot="{ componentField }" name="phoneNumber" :validate-on-blur="!isFieldDirty">
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+1 234 567 890" v-bind="componentField" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>

                        <div class="flex justify-end">
                            <Button type="submit">
                                Complete Setup
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    </main>
</template>

<style scoped>
/* Add any custom styling here */
</style>
