<template>
    <header class=" w-full">
        <nav class="">
            <div class="flex h-[20%] max-h-[175px] min-h-[175px] fixed p-2 left-[8%] z-10 transition duration-500" id="icon_1">
                <img src="../assets/images/logo.png"/>
            </div>
            <div class="flex h-[10%] max-h-[50px] min-h-[50px] fixed right-[10%] top-[80px] z-10 transition duration-500" id="icon_2">
                <img src="../assets/images/X-navbar.png"/>
            </div>
            <div
        class="
            flex
            w-full
            z-0
            bg-gradient-to-r from-gray-900 to-red-900
            transition
            duration-500
            h-[200px]
            fixed
            "
            id="scrollBar"
        >
            <h1 class="z=10 left-[50%]">Yeeett</h1>
        </div>
        </nav>
    </header>
</template>


<script setup>
import { useAuth } from '@/composables/useAuth';
import { onMounted } from 'vue';
import { useScroll } from '@vueuse/core'
// import { useWindowScroll } from '@vueuse/core'
import { watch } from '@vue/composition-api'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(() => {
    const nav_bar = document.getElementById('scrollBar')
    const icon_1 = document.getElementById('icon_1')
    const icon_2 = document.getElementById('icon_2')

    var { x, y, isScrolling, arrivedState, directions } = useScroll(window)
    watch(y, () => {
        // console.log(y, directions)
        if (directions.bottom == true) {
            // nav_bar.classList.add('opacity-25')
            nav_bar.classList.add('opacity-0')
            nav_bar.classList.remove('opacity-100')
            icon_1.classList.remove('scale-x-100')
            icon_1.classList.remove('scale-y-100')
            icon_1.classList.remove('translate-x-[5%]')
            icon_1.classList.add('scale-x-50')
            icon_1.classList.add('scale-y-50')
            icon_1.classList.add('translate-x-[-20%]')
            icon_1.classList.add('translate-y-[-12%]')

            icon_2.classList.remove('scale-x-100')
            icon_2.classList.remove('scale-y-100')
            icon_2.classList.remove('translate-x-[5%]')
            icon_2.classList.add('scale-x-50')
            icon_2.classList.add('scale-y-50')
            icon_2.classList.add('translate-x-[20%]')
            icon_2.classList.add('translate-y-[-50%]')
            // await sleep(1000)
        }
        if (directions.bottom == false) {
            nav_bar.classList.add('opacity-100')
            nav_bar.classList.remove('opacity-0')
            icon_1.classList.remove('scale-x-50')
            icon_1.classList.remove('scale-y-50')
            icon_1.classList.remove('translate-x-[-20%]')
            icon_1.classList.remove('translate-y-[-12%]')

            icon_2.classList.remove('scale-x-50')
            icon_2.classList.remove('scale-y-50')
            icon_2.classList.remove('translate-x-[20%]')
            icon_2.classList.remove('translate-y-[-50%]')
            // await sleep(1000)
        }
    })

})

</script>
<style>

</style>
