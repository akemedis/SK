import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const user = null;
  const { $supabase } = useNuxtApp();
  const name = ref('Eduardo');
  const supabase = ref({ $supabase });
  return {
    name,
    supabase,
  };
});
