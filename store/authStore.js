import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  async function get_user() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    console.log(user);
  }
  async function log_out() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      console.log('logged out');
    }
    if (error) {
      console.log(error);
    }
  }
  async function signInWithEmail(email, password) {
    try {
      const { data } = await this.ensureSupabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log('Logged in user:', data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  return {
    count,
    name,
    doubleCount,
    increment,
    get_user,
    log_out,
    signInWithEmail,
  };
});
