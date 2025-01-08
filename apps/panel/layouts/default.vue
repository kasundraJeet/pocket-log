<script setup>
import { Icon } from '@iconify/vue'

const navLinks = ref([{
    nav_group: [
        {

            id: 1,
            nav_item: 'Home',
            nav_link: '/',
            nav_icon: 'solar:home-linear',
            nav_active: ['/']
        }
    ]
}])
</script>

<template>
    <main class="w-full h-dvh overflow-hidden flex items-stretch">
        <ScrollArea as="aside" class="w-full h-dvh border-r border-input max-w-14 flex flex-col justify-between gap-4">
            <ul class="flex flex-col justify-center items-center p-2">
                <li v-for="(item, index) in navLinks" :key="index">
                    <ul>
                        <li v-for="nav in item.nav_group" :key="nav.id">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Button size="icon" variant="ghost" as-child>
                                            <RouterLink :to="nav.nav_link">
                                                <Icon :icon="nav.nav_icon" />
                                            </RouterLink>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent align="end" class="ml-9" side="center">
                                        <p>{{ nav.nav_item }}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </ul>
                </li>
            </ul>
        </ScrollArea>
        <div class="flex flex-col w-full h-full">
            <header class="border-b border-input">asa</header>
            <ScrollArea class="h-full w-full">
                <slot />
            </ScrollArea>
        </div>
    </main>
</template>