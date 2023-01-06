<template>
  <div>
    <h1>{{ thoughts }}</h1>
    <h1>{{ num_thoughts }}</h1>
    <thought />
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
    const response = await supabase.from('Thoughts').select();
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Storing thoughts in a reactive ref array
let thoughts = ref([]);
let num_thoughts = ref(0);
getData().then((data) => {
  data.data.forEach((entry) => thoughts.value.push(entry.content));
  num_thoughts = thoughts.value.length;
});
</script>

<style></style>
