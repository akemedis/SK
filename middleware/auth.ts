// import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/composables/useAuth';

export default defineNuxtRouteMiddleware(async (to) => {
  const { get_user } = useAuth();
  const { $supabase } = useNuxtApp();
  const user = await get_user($supabase);
  if (!user && to.path === '/essays') {
    navigateTo('/login');
  } else if (user && to.path === '/essays') {
    navigateTo('/essays');
  }
});
