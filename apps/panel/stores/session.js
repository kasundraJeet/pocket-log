import { ref } from "vue";
import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", () => {
  const sessionData = ref(null);

  function setSession(value) {
    console.log(value);
    sessionData.value = value;
  }

  return { setSession, sessionData };
});
