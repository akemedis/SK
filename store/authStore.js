import { defineStore } from 'pinia';
import { useAuth } from '@/composables/useAuth';
export const useAuthStore = defineStore('auth', () => {
  const { get_user } = useAuth();
  const { $supabase } = useNuxtApp();
  const supabase = $supabase;
  const user = get_user($supabase);
  const name = ref('Eduardo');
  return {
    name,
    supabase,
    user,
  };
});
