export const useDatabase = (supabase) => {
  const fuck = 'fuck';
  const post_thought = async (supabase, content, tags) => {
    console.log(tags);
    let arrayTags = [];
    if (tags.includes(',')) {
      arrayTags = tags.split(',');
    } else {
      arrayTags = [tags];
    }
    const thought_id = ref(0);
    // inserting thought
    try {
      console.log('in level 1');
      const { error } = await supabase
        .from('thoughts')
        .insert({
          content: content,
        })
        .then(async (value) => {
          console.log('in level 2', value);
          thought_promise = await supabase
            .from('thoughts')
            .select('id')
            .eq('content', content)
            .then(async (value) => {
              console.log('in level 3', value);
              thought_id.value = value;
              // dealing with tags
              try {
                console.log('in level 4');
                for await (const tag of arrayTags) {
                  console.log('this is tag', tag);
                  // is tag already existing, if so grab ID
                  let tag_id = null;
                  let existing_tag = await supabase
                    .from('tags')
                    .select('id')
                    .eq('tag', tag)
                    .then(async (value) => {
                      console.log('in level 5', value);
                      // if there is no existing tag, insert one, then get ID of it
                      if (existing_tag.length === 0) {
                        const tag_id = await supabase
                          .from('tags')
                          .insert({ tag: tag })
                          .returning('id')
                          .then(async (value) => {
                            console.log('in level 6', value);
                            // create row in join table, define relationship
                            const { error } = await supabase
                              .from('thought_tag')
                              .insert({
                                thought_id: thought_id.value,
                                tag_id: value,
                              });
                          });
                        console.log(error);
                        // if there is an existing tag, define new relationship
                      } else if (existing_tag.length > 0) {
                        console.log('in level 1v2');
                        const { error } = await supabase
                          .from('thought_tag')
                          .insert({
                            thought_id: thought_id.value,
                            tag_id: existing_tag[0],
                          });
                      }
                    });
                }
              } catch (error) {
                console.error(error);
              }
            });
        });
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
  const format_tags = (unFormTags) => {
    let tags = [];
    unFormTags.forEach((Objtag) => {
      tags.push(Objtag.tag);
    });
    return tags;
  };
  return {
    post_thought,
    retrieve_thought_tag,
    format_date,
    format_tags,
    fuck,
  };
};
