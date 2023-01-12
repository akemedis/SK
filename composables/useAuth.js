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
        JSON.parse(JSON.stringify(authStore.user)) // this is how you unpack the proxy
      );
      return {
        root_user: user,
        stored_user: JSON.parse(JSON.stringify(authStore.user)),
      };
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  const log_out = async (supabase) => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    if (!error) {
      const authStore = useAuthStore();
      authStore.user = {};
      console.log('logged out');
    }
    return True;
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
