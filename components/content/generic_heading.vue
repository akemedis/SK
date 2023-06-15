<script setup>
defineProps({
    title: {
        type: String,
        default: 'Default title'
    },
    subtitle: {
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
            {{ subtitle }}
        </p>
    </div>
</template>