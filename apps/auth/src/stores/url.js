import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUrlStore = defineStore('url', () => {
  const session = ref(null)
  const isError = ref(null)
  const router = useRouter()

  function setsession(value) {
    session.value = value
    const url = `${import.meta.env.VITE_PANEL_DOMAIN}?token=${encodeURIComponent(value.token)}&expires_at=${encodeURIComponent(value.expires_at)}&refresh_token=${encodeURIComponent(value.refresh_token)}&token_type=${encodeURIComponent(value.token_type)}`
    if (!value.redictTo) {
      window.location.href = url
    } else {
      router.push(value.redictTo)
    }
  }

  function setError(value) {
    isError.value = value
    router.push({ name: 'urlVerify' })
  }

  return { setsession, session, isError, setError }
})
