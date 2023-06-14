
<script setup>
defineProps({
    title: {
        type: String,
        default: 'Default title'
    },
    author: {
        type: String,
        default: 'Default description'
    },
    date: {
        type: String,
        default: 'Default date'
    },
    topic: {
        type: String,
        default: 'Default topic'
    },
    description: {
        type: String,
        default: 'Default description'
    }
})
</script>

<template>
    <div>
        <h1 class="font-garamond font-semibold text-[200%] text-header_blue opacity-90">
            {{ title }}
        </h1>
        <p class="text-[150%] text-subtitle opacity-30 mb-5 font-alegreya font-regular italic">
            By {{ author }}, {{ date }}
        </p>
    </div>
</template>