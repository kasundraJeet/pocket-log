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
        },
        {

            id: 2,
            nav_item: 'Transactions',
            nav_link: '/',
            nav_icon: 'ant-design:transaction-outlined',
            nav_active: ['/']
        }
    ]
}])
</script>

<template>
    <main class="w-full h-dvh overflow-hidden flex items-stretch">
        <ScrollArea as="aside" class="w-full h-dvh border-r border-input max-w-14 ">
            <div class="flex flex-col h-dvh justify-between items-center gap-4 py-2  w-full">
                <ul class="flex flex-col  p-2">
                    <li v-for="(item, index) in navLinks" :key="index">
                        <ul class="space-y-1">
                            <li v-for="nav in item.nav_group" :key="nav.id">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger as-child>
                                            <Button size="icon" variant="outline" as-child>
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
                <div class="space-y-4 flex items-center flex-col justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button size="icon" variant="ghost">
                                <Avatar>
                                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" side="top" class="w-56 my-1">
                            <DropdownMenuItem>
                                <span>Profile setting</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <span>Setting</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup v-model="$colorMode.preference">
                                <DropdownMenuRadioItem value="light">
                                    Light
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="dark">
                                    Dark
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="system">
                                    System
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <span>Log out</span>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </ScrollArea>
        <ScrollArea class="h-full w-full">
            <slot />
        </ScrollArea>
    </main>
</template>