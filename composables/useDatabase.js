export const useDatabase = (supabase, data) => {
  const post_thought = async (supabase, data) => {
    try {
      const { error } = await supabase
        .from('thoughts')
        .insert({ content: data.content });
      console.log(error);
    } catch (error) {
      console.error(error);
    }
    try {
      const { error } = await supabase
        .from('tags')
        .insert({ tag: data.content });
      console.log(error);
    } catch (error) {
      console.error(error);
    }
  };
  const retrieve_thought_tag = async (supabase, data) => {
    try {
      const tags = await supabase
        .from('thought_tag')
        .innerJoin({ tags: 'tag_id' })
        .where({ thought_id: thoughtId })
        .select();
      console.log(tags);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    post_thought,
    retrieve_thought_tag,
  };
};
