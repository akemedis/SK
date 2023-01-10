import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

export const authStore = defineStore('auth', {
  state: () => ({
    user: {},
    supabase: {},
  }),
  getters: {
    ensureSupabase() {
      if (typeof this.supabase == 'undefined') {
        // creating anon user
        const config = useRuntimeConfig();
        const url = config.SUPABASE_URL;
        const key = config.SUPABASE_KEY;
        const client = createClient(url, key);
        this.supabase = client;
        console.log('ffff');
        return this.supabase;
      }
    },
  },
  actions: {
    async get_user() {
      const {
        data: { user },
      } = await this.supabase.auth.getUser();
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
