<template>
  <NuxtLink
    v-bind:to="link"
    class="
      text-gray-300
      hover:underline
      hover:underline-offset-3
      hover:decoration-4
      hover:decoration-green-500
      hover:text-white
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      move
    "
    >{{ title }}</NuxtLink
  >
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  link: String,
});
</script>

<style></style>
