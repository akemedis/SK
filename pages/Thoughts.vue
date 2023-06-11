<template>
  <div class="flex flex-wrap justify-center pt-[200px] sm:pt-[125px]" :key=thoughtKey>
    <thought
      v-for="thought in thoughts"
      :content="thought.content"
      :dates="format_date(thought.created_at)"
      :tags="format_tags(thought.tags)"
    />
  </div>
</template>

<script setup>
// middleware
definePageMeta({
  middleware: ['auth', 'process-thoughts'],
});
// imports
import { useDatabase } from '~/composables/useDatabase.js';
import { useThoughtStore } from '@/store/thoughtStore';
import { ref } from 'vue';

var thoughtStore = useThoughtStore()
const { $supabase } = useNuxtApp();
// var thoughtStore = useThoughtStore();
const { retrieve_thought_tag, format_date, format_tags, post_thought } =
  useDatabase();
var thoughts =  ref(null)

var thoughtKey = ref(0);

const forceRerender = () => {
  thoughtKey.value += 1;
  // console.log('clicked', thoughtKey.value)
  // console.log(thoughts)
};

// I literally have to call this function on client side to sync timing of rendering, kms, I don't even use the data from it, its ltierally for timing, took me 4 hours
retrieve_thought_tag($supabase).then((data) => {
  thoughts = thoughtStore.thoughts.value
  forceRerender()
  // var thoughtStore = useThoughtStore()
  // console.log('this is thought', thoughtStore.thoughts.value)
})



</script>


<style></style>
