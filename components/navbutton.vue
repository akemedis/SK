<template>
  <NuxtLink
    v-bind:to="link"
    class="
      text-gray-300
      block
      px-3
      py-2
      rounded-md
      text-base
      font-medium
      transition
      duration-500
      hover:text-white
      hover:scale-110
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
