import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/utils/supabase";

export const useSessionStore = defineStore(
  "session",
  () => {
    const sessionData = ref(
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("session")) || ""
        : ""
    );
    const router = useRouter();

    function setSession(value, is_refesh) {
      sessionData.value = value;

      const expiresAt = value?.expires_at;

      if (expiresAt) {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeDiff = expiresAt - currentTime;

        if (timeDiff <= 60 && timeDiff > 0) {
          triggerFunction();
        }
      }

      if (!is_refesh) {
        router.push("/initialize-profile");
      }
    }

    async function triggerFunction() {
      if (!sessionData.value?.sessionData.refresh_token) {
        console.error("No refresh token found.");
        return;
      }

      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: sessionData.value.sessionData.refresh_token,
      });

      if (error) {
        router.push("/session-close");
        return;
      }

      const modifyObject = {
        token: data.session.access_token,
        expires_at: data.session.expires_at,
        refresh_token: data.session.refresh_token,
        token_type: data.session.token_type,
      };

      setSession(modifyObject, true);
    }

    return { setSession, sessionData };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
);
