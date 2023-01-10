export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === '/essays') {
    navigateTo('/login');
  } else if (user.value && to.path === '/essays') {
    navigateTo('/essays');
  }
});
