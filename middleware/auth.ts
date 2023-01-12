// import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/composables/useAuth';
export default defineNuxtRouteMiddleware(async (to) => {
  const { get_user } = useAuth();
  const { $supabase } = useNuxtApp();
  const user = await get_user($supabase);
  console.log('this is the user', user);
  // essays
  if (user == null && to.path === '/essays') {
    console.log('notuser');
    return navigateTo('/login');
  } else if (user !== null && to.path === '/essays') {
    console.log('user');
    return;
  }
});
