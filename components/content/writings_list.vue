
<script setup lang="ts">


import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/writings', limit: 5}

</script>

<template>

<div id="content_list" class="flex flex-col items-center text-center">
    <ContentList :query="query" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="my-5 
        
        hover:animate-pulse 
        border-solid 
        border-y-2 
        py-5
        hover:shadow-md
        hover:scale-110
        transition
        duration-500
        ">
            <NuxtLink :to="'/writings'+article.path" class="font-alegreya text-[125%] hover:cursor-pointer">{{ article.title }}</NuxtLink>
            <p class="font-alegreya italic opacity-70">{{ article.author }} {{ article.date }}</p>
        </div>
    </ContentList>
</div>

</template>