<template>
    <div class=" 
    flex
    fixed 
    h-full 
    w-full 
    bg-drop_down
    font-garamond_bold
    items-center
    pl-[10%]
    ">
        <div class="
        flex 
        flex-col 
        justify-between
        h-[50%]
        button_div
        logo 
        "
        id="button_div">
            <navbutton :title="'Thoughts'" :link="'/Thoughts'" class="text-[200%] text-heading_beige nb opacity-0" id="b1" />
            <navbutton :title="'Essays'" :link="'/essays'" class="text-[200%] text-heading_beige nb opacity-0" id="b2" />
            <!-- <navbutton :title="'Visual Diary'" :link="'VisualDiary'" /> -->
            <navbutton :title="'Biotechnology'" :link="'Biotechnology'" class="text-[200%] text-heading_beige nb opacity-0" id="b3"/>
            <!-- <navbutton :title="'Consultancy'" :link="'Consultancy'" /> -->
            <navbutton :title="'About'" :link="'/about'" class="text-[200%] text-heading_beige nb opacity-0" id="b4" />
            <navbutton v-if="!authStore.user" :title="'Login'" :link="'/login'" class="text-[200%] text-heading_beige nb opacity-0" id="b5" />
            <navbutton v-if="!authStore.user" :title="'Signup'" :link="'/signup'" class="text-[200%] text-heading_beige nb opacity-0" id="b6" />
            <navbutton
            v-if="authStore.user"
            :title="'Create Thoughts'"
            :link="'/createThoughts'"
            class="text-[200%] text-heading_beige"
            />
            <navbutton
            v-if="authStore.user"
            :title="'Logout'"
            :link="'/login'"
            class="text-[200%] text-heading_beige"
            @click="log_out(authStore.supabase)"
            />
        </div>
    </div>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';
import { useAuthStore } from '@/store/authStore';
import { onMounted } from 'vue';
// unpacking auth functions
const { get_user, log_out } = useAuth();
const authStore = useAuthStore();



</script>

<style>

.nb {
  animation: buttonSlideIn 0.7s forwards;
}

@keyframes buttonSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

#b1 {
  animation-delay: 0s;
}

#b2 {
  animation-delay: 0.2s;
}

#b3 {
  animation-delay: 0.4s;
}

#b4 {
  animation-delay: 0.6s;
}

#b5 {
  animation-delay: 0.8s;
}

#b6 {
  animation-delay: 1s;
}

/* Add more nth-child rules for additional buttons if needed */
/* navbutton:nth-child(n) { --animation-delay: ...s; } */
</style>