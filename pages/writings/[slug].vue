<template>
    <main class="flex flex-col items-center min-h-[100vh]" id="parent_div" >
      <!-- <div class="flex flex-col w-screen justify-center mt-[250px] mb-[50px] sm:mt-[150px] px-5 max-w-[1000px] text-center sm:text-start">
        <h1 class="font-garamond font-semibold text-[200%] text-header_blue opacity-90">
          {{ data.title }}
        </h1>
        <p class="text-[150%] text-subtitle opacity-30 mb-5 font-alegreya font-regular italic">
          By {{ data.author }}, {{ data.date }}
        </p> -->
        <div id="content_container" class="flex flex-col w-screen justify-center mt-[250px] mb-[50px] sm:mt-[150px] px-5 max-w-[1000px] text-center sm:text-start">
            <ClientOnly>
                <ContentRenderer :value="data"/>
             </ClientOnly>
        </div>
      <!-- </div> -->
    </main>
</template>
  
<script setup>
const { data } = await useAsyncData('writing_1', () => queryContent('/writings/writing_1').findOne())

console.log(data.title)

</script>

<style>

#content_container p {
    
}


</style>