<template>
  <div class="flex flex-wrap justify-center">
    <thought
      v-for="item in export_data"
      :content="item.thought"
      :dates="item.date"
      :tags="item.tags"
    />
  </div>
</template>

<script setup>
// middleware
definePageMeta({
  middleware: ['auth'],
});
// imports
import { useDatabase } from '~/composables/useDatabase.js';

// functions
const { retrieve_thought_tag } = useDatabase();

// retrieving thoughts
retrieve_thought_tag();

// setup

// fetching data from supabase db, this uses an anonymous user, this is for non RLS
// async function getData() {
//   try {
//     const response = await supabase
//       .from('thoughts')
//       .select('content, created_at')
//       .order('id', { ascending: false });
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Storing thoughts in a reactive ref array
// let export_data = ref([]);
// getData().then((data) => {
//   data.data.forEach((entry) => {
//     let dateString = entry.created_at;
//     const date = new Date(dateString);
//     const options = {
//       year: '2-digit',
//       month: '2-digit',
//       day: '2-digit',
//       timeZone: 'Australia/Sydney',
//     };
//     // let tags = entry.tags.split(',');
//     const formattedDate = date.toLocaleDateString('en-AU', options);
//     let item = {
//       thought: entry.content,
//       date: formattedDate,
//       // tags: tags,
//     };
//     // console.log(entry);
//     export_data.value.push(item);
//   });
// });
// console.log(export_data);
</script>

<style></style>
