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
  const retrieve_thought_tag = async (supabase) => {
    try {
      const { data, error } = await supabase.from('thoughts').select(`
        content,
        created_at,
        tags (
          tag
        )`);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const format_date = (unFormDate) => {
    let dateString = unFormDate;
    const date = new Date(dateString);
    const options = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Australia/Sydney',
    };
    const formattedDate = date.toLocaleDateString('en-AU', options);
    return formattedDate;
  };
  return {
    post_thought,
    retrieve_thought_tag,
    format_date,
  };
};
