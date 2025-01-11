<script setup>
import { Icon } from '@iconify/vue'
import { useSessionStore } from '@/stores'

const sessionStore = useSessionStore()
console.log(sessionStore.sessionData.refresh_token)

const dashbaordLinks = ref([
    {
        id: '1',
        name: 'expense Account',
        links: [
            {
                id: 11,
                link: '/dashboard/account',
                name: 'All Accounts',
                active: ['/'],
            }
        ]
    },
    {
        id: '3',
        name: 'Account',
        links: [
            {
                id: 31,
                link: '/dashboard/preference',
                name: 'Preferences',
            }
        ]
    },
    {
        id: '4',
        name: 'Documentation',
        links: [
            {
                id: 41,
                link: '/',
                icon: 'solar:arrow-right-up-linear',
                name: 'Guides',
            },
            {
                id: 42,
                link: '/',
                icon: 'solar:arrow-right-up-linear',
                name: 'Faq',
            }
        ]
    },
    {
        id: '2',
        links: [
            {
                id: 21,
                icon: 'solar:logout-2-broken',
                name: 'Logout',
            }
        ]
    }
])
</script>

<template>
    <div class="w-full h-dvh flex items-stretch">
        <aside class="border-r w-full max-w-64 border-input">
            <div class="border-b border-input px-3.5 py-2.5">
                <h2 class="uppercase tracking-wide">Dashbaord</h2>
            </div>
            <ul class="divide-y divide-input">
                <li v-for="item in dashbaordLinks" :key="item" class="py-4 space-y-2 px-3.5">
                    <h4 class="text-sm capitalize text-muted-foreground">{{ item.name }}</h4>
                    <ul>
                        <li v-for="links in item.links" :key="links.id">
                            <RouterLink v-if="links.link" class="py-1 w-full hover:underline flex items-center" :to="links.link">
                                <Icon v-if="links.icon" :icon="links.icon" class="mr-2.5 inline-flex" />
                                {{ links.name }}
                            </RouterLink>
                            <Button v-else variant="ghost"  class="w-full px-0 py-0  h-auto hover:bg-transparent justify-start">
                                <Icon :icon="links.icon" class="mr-2" />
                                {{ links.name }}
                            </Button>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <ScrollArea class="w-full h-full">
            <main class="container py-4">
                <slot />
            </main>
        </ScrollArea>
    </div>
</template>