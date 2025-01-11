<script setup>
import { Icon } from '@iconify/vue'

definePageMeta({
    layout: 'dashboard'
})

const active = ref(true)
const paused = ref(true)
</script>

<template>
    <div class="space-y-8">
        <div class="flex items-stretch justify-end gap-2.5">
            <div class="relative w-full max-w-xs">
                <Input id="search" type="text" placeholder="Search..." class="pl-10" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Icon icon="ph:magnifying-glass-light" class="size-6 text-muted-foreground" />
                </span>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline" size="icon">
                        <Icon icon="solar:filter-linear" class="size-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56">
                    <DropdownMenuCheckboxItem v-model:checked="active">
                        Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem v-model:checked="paused">
                        Paused
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="secondary">New Account</Button>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <Card class="relative">
                <Badge class="absolute right-2.5 top-2.5" variant="secondary">Free</Badge>
                <CardHeader class="pb-0">
                    <CardTitle>Personal Account</CardTitle>
                    <div class="flex flex-wrap gap-1.5 mt-2.5">
                        <Badge variant="outline">4 Notifaction</Badge>
                        <Badge variant="destructive">2 Alert</Badge>
                    </div>
                </CardHeader>
                <CardContent class="flex flex-col justify-end  min-h-40   ">
                    <div class="flex items-center  justify-between">
                        <Button size="icon" variant="outline">
                            <Icon icon="solar:settings-broken" />
                        </Button>
                        <Button size="icon" variant="outline" as-child>
                            <RouterLink to="/">
                                <Icon icon="solar:arrow-right-up-broken" />
                            </RouterLink>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>