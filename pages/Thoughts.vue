<template>
  <div class="flex flex-wrap justify-center">
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
const { $supabase } = useNuxtApp();
const { retrieve_thought_tag, format_date, format_tags, post_thought } =
  useDatabase();
const thoughtStore = useThoughtStore();
const thoughts = thoughtStore.thoughts.value;
</script>

<style></style>
