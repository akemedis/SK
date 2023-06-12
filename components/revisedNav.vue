<template>
    <header class=" flex w-full">
        <nav class="">
            <div class="
            flex
            w-full
            z-20
            fixed
            h-[200px]
            sm:h-[125px]
            justify-between
            items-center
            px-5
            max-w-[1000px]
            mx-auto
            inset-x-0 
            ">
                <div class="
                flex 
                h-[75%] 
                z-20 
                transition 
                duration-500
                " 
                id="icon_1">
                    <img src="../assets/images/logo.png"/>
                </div>
                <div class="flex 
                h-[20%] 
                z-20 
                transition 
                duration-500
                px-5
                mt-5
                sm:mt-2
                " 
                id="icon_2"
                @click="drop_menu(route_header, drop_logo)">
                    <img class="cursor-pointer transition duration-500 hover:scale-125 hover:drop-shadow-md" id="x-logo" src="../assets/images/X-navbar.png"/>
                </div>
            </div>
            <div
        class="
            flex
            w-full
            z-10
            bg-gradient-to-r from-gray-900 to-red-900
            transition
            duration-500
            h-[200px]
            sm:h-[125px]
            fixed
            justify-center
            items-center
            "
            id="scrollBar"
        >
            <h1 class="z=10 left-[50%] font-garamond_bold text-[200%] text-heading_beige transition duration-500" id="route_name">{{ route.name }}</h1>
        </div>
        </nav>
        <transition>
            <navDrop v-if="drop_the_menu == true" />
        </transition>
    </header>
</template>


<script setup>
import { useAuth } from '@/composables/useAuth';
import { onMounted, onBeforeMount, onBeforeUpdate } from 'vue';
import { useScroll, useScrollLock } from '@vueuse/core'
// import { useWindowScroll } from '@vueuse/core'
import { watch } from '@vue/composition-api'

const route = useRoute()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function drop_menu(route_header, drop_logo) {
    if (drop_the_menu.value == false) {
        drop_the_menu.value = true
        route_header.classList.add('opacity-0')
        route_header.classList.remove('opacity-100')
        drop_logo.classList.add('rotate-90')
    } else {
        drop_the_menu.value = false
        route_header.classList.remove('opacity-0')
        route_header.classList.add('opacity-100')
        drop_logo.classList.remove('rotate-90')
    }
}

let drop_the_menu = ref(false)
let route_header = ref('')
let drop_logo = ref('')

watch ( () => route.name, () => {
    drop_the_menu.value = false
    route_header.classList.remove('opacity-0')
    route_header.classList.add('opacity-100')
    drop_logo.classList.remove('rotate-90')
})

onMounted(() => {
    const nav_bar = document.getElementById('scrollBar')
    const icon_1 = document.getElementById('icon_1')
    const icon_2 = document.getElementById('icon_2')

    route_header = document.getElementById('route_name')
    drop_logo = document.getElementById('x-logo')

    function release_nav () {
        // changing opacity
        nav_bar.classList.add('opacity-0')
        nav_bar.classList.remove('opacity-100')
        icon_2.classList.remove('opacity-100')
        icon_2.classList.add('opacity-0')
        icon_1.classList.remove('opacity-100')
        icon_1.classList.add('opacity-25')

        // logo animation on scroll down
        icon_1.classList.remove('scale-x-100')
        icon_1.classList.remove('scale-y-100')
        icon_1.classList.remove('translate-x-[5%]')
        icon_1.classList.add('scale-x-50')
        icon_1.classList.add('scale-y-50')
        icon_1.classList.add('translate-x-[-20%]')
        icon_1.classList.add('translate-y-[-12%]')

        // icon animation on scroll down
        icon_2.classList.remove('scale-x-100')
        icon_2.classList.remove('scale-y-100')
        icon_2.classList.remove('translate-x-[5%]')
        icon_2.classList.add('scale-x-50')
        icon_2.classList.add('scale-y-50')
        icon_2.classList.add('translate-x-[20%]')
        icon_2.classList.add('translate-y-[-50%]')

        route_header.classList.remove('opacity-100')
    }

    function return_nav () {
        // changing opacity scroll-up
        nav_bar.classList.add('opacity-100')
        nav_bar.classList.remove('opacity-0')
        icon_2.classList.add('opacity-100')
        icon_2.classList.remove('opacity-0')
        icon_1.classList.add('opacity-100')
        icon_1.classList.remove('opacity-25')

        // logo animation on scroll up
        icon_1.classList.remove('scale-x-50')
        icon_1.classList.remove('scale-y-50')
        icon_1.classList.remove('translate-x-[-20%]')
        icon_1.classList.remove('translate-y-[-12%]')

        // icon animation on scroll up
        icon_2.classList.remove('scale-x-50')
        icon_2.classList.remove('scale-y-50')
        icon_2.classList.remove('translate-x-[20%]')
        icon_2.classList.remove('translate-y-[-50%]')

        route_header.classList.add('opacity-100')
    }

    var { x, y, isScrolling, arrivedState, directions } = useScroll(window)
    watch(y, () => {
        
        // console.log(y, directions, arrivedState)
        if (directions.bottom == true && drop_the_menu.value == false) {
            release_nav()
        }
        if (directions.bottom == false && drop_the_menu.value == false) {
            return_nav()
        }
    })
})


</script>
<style>
/* These define transitions for conditionally renderd dom elements */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#route_name {
    animation: route_header_slide 1s forwards;
    text-transform: capitalize;
}
</style>
