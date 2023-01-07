<template>
  <div
    class="
      grid
      flex
      self-center
      card
      bg-base-300
      rounded-box
      place-items-center
      border-2 border-gray-200
      m-7
      p-1
      rounded-2xl
      max-w-prose
      shadow-lg
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
    "
  >
    <div class="grid justify-items-center bg-gray-100 rounded-2xl p-4">
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
import VTypical from 'vue-typical';
const props = defineProps({
  content: String,
  dates: String,
  tags: Array,
});
console.log(props.tags[0]);
</script>
