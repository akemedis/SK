<template>
  <div class="opacity-30 z-0 relative">
    <p class=" font-qwitcher_regular italic text-xl text-drop_down">#{{ tag }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  tag: String,
});
</script>

<style></style>
