// import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/composables/useAuth';
import { useAuthStore } from '@/store/authStore';
export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const user = authStore.user;
  console.log('this is the user', user);
  // essays
  if (
    (user == null && to.path === '/essays') ||
    (to.path === '/createThoughts' && user == null)
  ) {
    console.log('notuser', user);
    return navigateTo('/login');
  } else if (user !== null && to.path === '/essays') {
    console.log('user');
    return;
  }
});
