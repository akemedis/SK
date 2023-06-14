<template>
    <div class="flex flex-col items-center my-10">
        <div class="flex max-w-[100%] md:max-w-[25%] font-alegreya text-[125%]">
            <slot name="image" />
        </div>
        <div class="text-start font-alegreya text-[125%] opacity-50 italic">
            <slot name="caption" />
        </div>
    </div>
</template>