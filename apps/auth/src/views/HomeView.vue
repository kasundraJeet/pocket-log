<script setup>
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import quotes from '@/lib/quotes';
import { useUrlStore } from '@/stores'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { onMounted } from 'vue';

const urlStore = useUrlStore()
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];


const getErrorFromHash = () => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace('#', ''));
  const isError = params.get('error') || '';
  const isSession = params.get('type') || '';
  if (isError) {
    urlStore.setError(true)
  }
  if (isSession === 'signup') {
    const modifyObject = {
      token: params.get('access_token'),
      expires_at: params.get('expires_at'),
      refresh_token: params.get('refresh_token'),
      token_type: params.get('token_type')
    }
    urlStore.setsession(modifyObject)
  }
  if (isSession === 'recovery') {
    const modifyObject = {
      token: params.get('access_token'),
      expires_at: params.get('expires_at'),
      refresh_token: params.get('refresh_token'),
      token_type: params.get('token_type'),
      redictTo: '/reset-password'
    }
    urlStore.setsession(modifyObject)
  }
};

onMounted(() => {
  getErrorFromHash();
});
</script>

<template>
  <section class="grid grid-cols-3 w-full h-dvh">
    <div class="col-span-2 h-full flex flex-col justify-between py-3 px-5">
      <div>
      </div>
      <div class="space-y-6">
        <h2 class="text-5xl tracking-wide leading-[1.4] font-bold line-clamp-2">{{ randomQuote.line }}</h2>
        <div class="flex items-center gap-3.5">
          <Avatar>
            <AvatarImage src="https://robohash.org/7842f2320b606ea59343f0f967f891f7?set=set4&bgset=&size=400x400"
              alt="kasundra jeet" />
            <AvatarFallback>KJ</AvatarFallback>
          </Avatar>
          <div>
            <h6 class="text-base text-muted-foreground">Kasundra Jeet</h6>
            <p class="text-xs">A Story writer</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full flex flex-col justify-between bg-background px-5 py-3">
      <div></div>
      <div class="flex gap-2.5">
        <Button class="w-full" as-child>
          <RouterLink to="/sign-in">Login</RouterLink>
        </Button>
        <Button class="w-full" as-child>
          <RouterLink to="/sign-up">Sign Up</RouterLink>
        </Button>
      </div>
      <div class="flex items-center justify-center gap-3">
        <RouterLink to="/" class="text-muted-foreground text-sm">Terms of Service</RouterLink>
        <Separator orientation="vertical" />
        <RouterLink to="/" class="text-muted-foreground text-sm">Privacy Policy</RouterLink>
      </div>
    </div>
  </section>
</template>
