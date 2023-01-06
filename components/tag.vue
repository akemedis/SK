<template>
  <div class="m-2 border p-2 rounded-lg bg-gray-200 opacity-60">
    <p class="font-technica text-gray-500">{{ tag }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  tag: String,
});
</script>

<style></style>
