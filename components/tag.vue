<template>
  <div class="opacity-30 z-0 relative">
    <p class="font-serif italic font-bold text-subtitle">#{{ tag }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  tag: String,
});
</script>

<style></style>
