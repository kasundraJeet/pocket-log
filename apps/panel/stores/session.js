import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useSessionStore = defineStore(
  "session",
  () => {
    const sessionData = ref(null);
    const router = useRouter();

    function setSession(value) {
      sessionData.value = value;
      router.push("/initialize-profile");
    }

    return { setSession, sessionData };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
);
