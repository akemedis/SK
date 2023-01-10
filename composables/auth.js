export default {
  async get_user(supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  },
  async log_out(supabase) {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    if (!error) {
      console.log('logged out');
    }
  },
  async signInWithEmail(email, password, supabase) {
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
};
