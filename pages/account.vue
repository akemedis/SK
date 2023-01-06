<template>
  <div>
    <h1>{{ mydata }}</h1>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();
const url = config.SUPABASE_URL;
const key = config.SUPABASE_KEY;
const supabase = createClient(url, key);
console.log(supabase);
async function getData() {
  try {
    const response = await supabase.from('Thoughts').select();
    return response;
  } catch (error) {
    console.error(error);
  }
}
console.log(getData());
let mydata = ref('');
let thoughts = [];
getData().then((data) => {
  for (let i = 0; i < data.data.length; i = i++) {
    console.log(data.content);
  }
  mydata.value = data.data[0].content;
  // console.log(mydata);
});
// console.log(mydata);
</script>

<style></style>
