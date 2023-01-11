import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      supabase: {},
      test: 345,
      test2: 'fuck this',
    };
  },
  mutations: {
    SET_SUPABASE: (state, supabase) => {
      state.supabase = supabase;
    },
  },
  hooks: {
    create(store, { $supabase }) {
      store.commit('SET_SUPABASE', $supabase);
      console.log(
        'this is the store speaking, client set as supabase',
        store.state.supabase
      );
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
      if (!error) {
        console.log('logged out');
      }
      if (error) {
        console.log(error);
      }
    },
    async signInWithEmail(email, password) {
      try {
        const { data } = await this.ensureSupabase.auth.signInWithPassword({
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
