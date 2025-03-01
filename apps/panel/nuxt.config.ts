export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    'pinia-plugin-persistedstate',
    '@nuxtjs/supabase',
    'nuxt-security'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  colorMode: {
    preference: 'system',
    fallback: 'system',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie',
    storageKey: 'nuxt-color-mode'
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_KEY,
    redirect: false,
  }
})