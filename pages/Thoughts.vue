<template>
  <div class="flex flex-wrap justify-center">
    {{ thoughts[0].created_at }}
    <thought
      v-if="render == true"
      v-for="thought in thoughts"
      :content="thought.content"
      :date="formattedDate(thought.created_at)"
      :tags="thought.tags"
    />
  </div>
</template>

<script setup>
// middleware
definePageMeta({
  middleware: ['auth', 'thoughts'],
});
// imports
import { useDatabase } from '~/composables/useDatabase.js';
import { useAuthStore } from '@/store/authStore';
const { $supabase } = useNuxtApp();
const authStore = useAuthStore();
const { retrieve_thought_tag, formattedDate } = useDatabase();
// retrieving thoughts
let thoughts = ref(Array);
retrieve_thought_tag($supabase).then((value) => (thoughts.value = value)); // so fuckign stupid
// watcher for conditional rendering
let render = ref(false);
watch(thoughts, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  render.value = true;
});

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
