<template>
  <header>
    <nav>
      <div
        class="
          flex
          flex-wrap
          justify-around
          sm:justify-center
          sm:pt-5
          bg-gradient-to-r
          from-blue-700
          via-cyan-600
          to-emerald-600
          p-2
          animate-gradient-x
        "
      >
        <client-only placeholder="">
          <v-typical
            class="blink text-white font-anu text-2xl text-white-100"
            :steps="[
              '',
              200,
              'F**K THE SYSTEM',
              500,
              'SERAJ KOTAGAMA',
              1000,
            ]"
            :loop="1"
            :wrapper="'h2'"
          ></v-typical>
        </client-only>
        <div class="flex flex-wrap justify-start w-1/2 sm:w-full sm:justify-center">
          <navbutton :title="'Thoughts'" :link="'/Thoughts'" />
          <navbutton :title="'Essays'" :link="'/essays'" />
          <!-- <navbutton :title="'Visual Diary'" :link="'VisualDiary'" /> -->
          <navbutton :title="'Biotechnology'" :link="'Biotechnology'" />
          <!-- <navbutton :title="'Consultancy'" :link="'Consultancy'" /> -->
          <navbutton :title="'About'" :link="'/about'" />
          <navbutton v-if="!authStore.user" :title="'Login'" :link="'/login'" />
          <navbutton v-if="!authStore.user" :title="'Signup'" :link="'/signup'" />
          <navbutton
            v-if="authStore.user"
            :title="'Create Thoughts'"
            :link="'/createThoughts'"
          />
          <navbutton
            v-if="authStore.user"
            :title="'Logout'"
            :link="'/login'"
            @click="log_out(authStore.supabase)"
          />
        </div>
        <div>

        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import VTypical from 'vue-typical';
import { useAuth } from '@/composables/useAuth';
import { useAuthStore } from '@/store/authStore';
// unpacking auth functions
const { get_user, log_out } = useAuth();
const authStore = useAuthStore();
</script>

<style></style>
