<template>
    <div class="font-alegreya leading-10 text-[125%] text-justify">
        <slot />
    </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in' // default
  }
})

</script>