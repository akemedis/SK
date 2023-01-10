import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

export const authStore = defineStore('auth', {
  state: () => ({
    user: {},
    supabase: {},
  }),
  getters: {
    updateSupabase() {
      if (typeof supabase == 'undefined') {
        // creating anon user
        const config = useRuntimeConfig();
        const url = config.SUPABASE_URL;
        const key = config.SUPABASE_KEY;
        const supabase = createClient(url, key);
        supabase = supabase;
        // console.log(authStore.supabase);
      }
    },
  },
  actions: {
    createClient() {},
    async get_user() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    },
    async log_out() {
      const { error } = await supabase.auth.signOut();
      console.log(error);
      if (!error) {
        console.log('logged out');
      }
    },
    async signInWithEmail(email, password) {
      try {
        const { data } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        console.log('Logged in user:', data);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  },
});
