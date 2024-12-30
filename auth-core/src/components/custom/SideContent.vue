<script setup>
import Button from '../ui/button/Button.vue'
import { Marquee } from 'vue-fast-marquee'
import tags from '@/lib/tagList'
import quotes from '@/lib/quotes'
</script>

<template>
  <div class="relative hidden dark:bg-[#eaeaea14] bg-secondary h-full md:block">
    <div class="h-full flex flex-col justify-between">
      <div class="py-4 px-4 space-y-2">
        <Button variant="outline" size="icon"></Button>
        <h2 class="text-xl font-semibold tracking-wider capitalize">{{ quotes[0].line }}</h2>
      </div>
      <div class="py-4">
        <Marquee speed="40">
          <ul class="py-1 flex flex-nowrap">
            <li class="mx-1" v-for="item in tags" :key="item.tag">
              <Button variant="outline" class="disabled:!opacity-100" disabled>{{
                item.tag
              }}</Button>
            </li>
          </ul>
        </Marquee>
        <Marquee speed="40" direction="right">
          <ul class="py-1 flex flex-nowrap">
            <li class="mx-1" v-for="item in tags" :key="item.tag">
              <Button variant="outline" class="disabled:!opacity-100" disabled>{{
                item.tag
              }}</Button>
            </li>
          </ul>
        </Marquee>
      </div>
    </div>
  </div>
</template>
