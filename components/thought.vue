<template>
  <div
    class="
      flex
      self-center
      card
      place-items-center
      m-7
      p-1
      bg-transparent
      border-b-2
      border-dashed
      border-drop_down
      border-opacity-10
      rounded-md
      rounded-2xl
      max-w-prose
      shadow-sm
      hover:cursor-default
      duration-200
      sm:m-0
      sm:p-0
      sm:w-full
      sm:bg-none
      sm:py-2  
    "
  >
    <div class="flex flex-col bg-transparent rounded-2xl p-4 sm:w-full sm:bg-transparent">
      <h1 class="font-alegreya text-lg">{{ content }}</h1>
      <div class="flex flex-wrap">
        <tag v-for="tag in tags" :tag="tag" />
      </div>
      <h1 class="font-qwitcher_regular italic p-1 text-drop_down text-lg opacity-30">{{ dates }}</h1>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  content: String,
  dates: String,
  tags: Array,
});
// console.log(props.tags[0], props.date);
</script>
