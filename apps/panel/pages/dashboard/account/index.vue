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
    </div>
</template>