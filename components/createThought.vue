<template>
  <div class="flex justify-center">
    <div
      class="
        m-2
        border
        p-2
        rounded-lg
        flex flex-wrap
        justify-center
        w-11/12
        max-w-2xl
        mt-8
        hover:shadow-md
        hover:shadow-blue-200
        hover:border-blue-400
        hover:scale-105
        duration-200
      "
    >
      <div class="w-full p-3 flex flex-wrap justify-center">
        <label
          for="message"
          class="block mb-4 text-lg font-medium text-blue-900 font-technica"
          >Hey Seraj, what are you thinking?</label
        >
        <textarea
          id="message"
          v-model="thisPost.content"
          rows="4"
          class="
            block
            p-2.5
            w-full
            text-sm text-gray-900
            bg-gray-50
            rounded-lg
            border border-gray-300
            focus:outline-blue-300
            font-roboto
          "
          placeholder="Can't wait to here it..."
        ></textarea>
        <input
          v-model="thisPost.tags"
          type="text"
          class="
            mt-3
            block
            w-full
            p-4
            text-gray-900
            border border-gray-300
            rounded-lg
            bg-gray-50
            text-sm
            font-roboto
            focus:outline-blue-300
          "
          placeholder="Tags"
        />
        <div
          class="
            block
            border border-2 border-gray-300
            rounded-lg
            p-1
            font-technica
            shadow-md shadow-gray-200
            m-8
            mt-4
            mb-4
            hover:scale-110
            hover:shadow-xl
            hover:shadow-blue-200
            hover:border-blue-400
            duration-200
            max-w-fit
            text-blue-900
          "
        >
          <button
            class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
            @click="
              post_thought($supabase, thisPost.content, thisPost.tags);
              clearData();
            "
            type="button"
          >
            Post
          </button>
        </div>
      </div>
    </div>
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
let thisPost = reactive({
  content: '',
  tags: '',
});
function clearData() {
  thisPost.content = '';
  thisPost.tags = '';
}
</script>

<style></style>
