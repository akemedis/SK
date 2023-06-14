
<script setup lang="ts">


import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/writings', limit: 5}

</script>

<template>

<div id="content_list">
    <ContentList :query="query" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.author }}</p>
        </div>
    </ContentList>
</div>

</template>