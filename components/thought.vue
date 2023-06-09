<template>
  <div
    class="
      flex
      self-center
      card
      place-items-center
      md:border-2
      m-7
      p-1
      md:rounded-2xl
      md:max-w-prose
      md:shadow-lg
      hover:scale-110
      hover:shadow-xl
      hover:m-9
      hover:scale-110
      hover:shadow-xl
      hover:m-9
      duration-200
      bg-gradient-to-r
      from-purple-300
      via-blue-500
      to-cyan-500
      sm:m-0
      sm:p-0
      sm:w-full
      sm:bg-from-transparent
      sm:via-transparent
      sm:to-transparent
      sm:bg-none
      sm:py-2  
    "
  >
    <div class="grid justify-items-center bg-gray-100 rounded-2xl p-4 sm:w-full sm:bg-transparent">
      <h1 class="font-roboto-500 font-medium text-lg">{{ content }}</h1>
      <h1 class="font-roboto-500 font-light p-1">{{ dates }}</h1>
      <div class="flex flex-wrap">
        <tag v-for="tag in tags" :tag="tag" />
      </div>
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
