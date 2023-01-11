import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const { $supabase } = useNuxtApp();
  const name = ref('Eduardo');
  const supabase = ref({ $supabase });
  return {
    name,
    supabase,
  };
});
