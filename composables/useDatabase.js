export const useAuth = (supabase, data) => {
  const post_thought = async (supabase, data) => {
    try {
      const { error } = await supabase
        .from('Thoughts')
        .insert({ content: data.content, tags: data.tags });
      console.log(error);
    } catch (error) {
      console.error(error);
    }
  };
};
