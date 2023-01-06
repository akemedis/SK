<template>
  <div>
    <thought
      v-for="item in export_data"
      :content="item.thought"
      :dates="item.date"
    />
  </div>
</template>

<script setup>
// setup
import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();
const url = config.SUPABASE_URL;
const key = config.SUPABASE_KEY;
const supabase = createClient(url, key);

// fetching data from supabase db, this uses an anonymous user, this is for non RLS
async function getData() {
  try {
    const response = await supabase
      .from('Thoughts')
      .select('content, created_at');
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Storing thoughts in a reactive ref array
// let thoughts = ref([]);
// let dates = ref([]);
// let num_thoughts = ref(0);
let export_data = [];
getData().then((data) => {
  data.data.forEach((entry) => {
    // thoughts.value.push(entry.content);
    // dates.value.push(entry.date);
    let item = {
      thought: entry.content,
      date: entry.created_at,
    };
    // console.log(entry);
    export_data.push(item);
  });
});
console.log(export_data);
</script>

<style></style>
