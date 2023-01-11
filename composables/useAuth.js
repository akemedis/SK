export const useAuth = (supabase) => {
  const get_user = async (supabase) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  };
  const log_out = async (supabase) => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    if (!error) {
      console.log('logged out');
    }
  };
  const signInWithEmail = async (email, password, supabase) => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log('Logged in user:', data);
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
