import { useAuthStore } from '@/store/authStore';

export const useAuth = (supabase) => {
  const get_user = async (supabase) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const authStore = useAuthStore();

      console.log(
        user,
        authStore.user,
        JSON.parse(JSON.stringify(authStore.user)) // this is how you unpack the proxy
      );

      return await supabase.auth.getUser();
    } catch (error) {
      console.error('Error fetching user:', error);
      return error;
    }
  };
  const log_out = async (supabase) => {
    try {
      const { error } = await supabase.auth.signOut();
      const authStore = useAuthStore();
      authStore.user = null;
      console.log('logged out');
    } catch (error) {
      console.log('Error loggin out:', error);
    }
  };
  const signInWithEmail = async (email, password, supabase) => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      // updating store
      const authStore = useAuthStore();
      authStore.user = data;
      console.log('Logged in user:', data, authStore.user);
      return {
        stored_user: JSON.parse(JSON.stringify(authStore.user)),
        root_user: data,
      };
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return {
    get_user,
    log_out,
    signInWithEmail,
  };
};
