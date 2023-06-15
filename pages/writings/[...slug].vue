<template>
  <main class="flex flex-col items-center min-h-[100vh]" id="parent_div" >
      <div id="content_container" class="flex flex-col w-screen justify-center mt-[250px] mb-[50px] sm:mt-[150px] px-5 max-w-[1000px] text-center sm:text-start">
        <contentDoc :document="data" :settings="{ toc: true }"/>
      </div>
  </main>
</template>
  
<script setup>
import { onMounted } from 'vue';
const route = useRoute()

// const { data } = await useAsyncData(route.params.slug, () => queryContent(`/writings/${route.params.slug}`).findOne())

async function get_content () {
  const data = await useAsyncData(route.params.slug, () => queryContent(`/writings/${route.params.slug}`).findOne());
  return data;
}
const data = get_content()


</script>

<style>


</style>