<script setup>
import { Icon } from '@iconify/vue'

definePageMeta({
    layout: 'dashboard'
})

const themeList = ref([{
    id: 1,
    name: 'Light',
    icon: 'solar:sun-broken',
},
{
    id: 2,
    name: 'Dark',
    icon: 'solar:moon-outline',
},
{
    id: 2,
    name: 'System',
    icon: 'pajamas:appearance',
}])
</script>

<template>
    <div class="w-full max-w-3xl">
        <Card class="w-full">
            <CardHeader>
                <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="flex items-start gap-12">
                    <div class="w-full max-w-56 space-y-1.5">
                        <CardDescription>Theme mode</CardDescription>
                        <CardDescription>Choose how Pocketlog looks to you. Select a single theme, or sync with your
                            system.</CardDescription>
                    </div>
                    <ul class="w-full grid grid-cols-2 gap-2.5">
                        <li v-for="item in themeList" :key="item.id" class="w-full rounded-lg border border-input divide-y divide-input">
                            <div class="py-3.5 px-2.5">
                                <Icon :icon="item.icon" class="mx-auto w-20 h-20" />
                            </div>
                            <div class="py-1.5 px-2.5 flex items-center justify-between w-full">
                                <p class="text-sm">{{ item.name }}</p>
                                <Checkbox :id="item.id" />
                            </div>
                        </li>
                    </ul>
                </div>
                <Separator class="my-6" />
                <div class="flex items-center justify-between">
                    <div class="space-y-2">
                        <CardTitle>Expand Navigation menu</CardTitle>
                        <CardDescription>Allow the Navigation panel to expand on Click</CardDescription>
                    </div>
                    <Switch :checked="false" disabled aria-readonly />
                </div>
            </CardContent>
        </Card>
    </div>
</template>