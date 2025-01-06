import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const lastValue = ref(null)

  function setLastForm(value) {
    lastValue.value = value
  }

  return { setLastForm, lastValue }
})
