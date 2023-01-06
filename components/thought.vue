<template>
  <div
    class="
      grid
      flex-grow
      h-32
      card
      bg-base-300
      rounded-box
      place-items-center
      border-4
    "
  >
    <h1>{{ content }}</h1>
    <h1>{{ dates }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  content: String,
  dates: String,
});
</script>

<style></style>
