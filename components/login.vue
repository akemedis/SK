<template>
  <div class="flex justify-center">
    <div
      class="
        flex
        justify-center
        mt-10
        mb-10
        bg-gradient-to-b
        from-purple-600
        via-blue-700
        to-cyan-600
        max-w-fit
        rounded-2xl
        shadow-md shadow-gray-300
        hover:shadow-2xl hover:shadow-blue-200
        duration-200
        sm:scale-80 sm:invisible
      "
    >
      <form
        class="
          flex flex-wrap
          justify-center justify-self-center
          m-1
          p-7
          rounded-2xl
          max-w-sm
          bg-gray-100
          visible
          sm:visible sm:bg-white sm:p-1
        "
        id="sign"
      >
        <div
          class="
            block
            p-2
            mb-8
            font-medium
            text-2xl
            bg-gradient-to-r
            from-purple-600
            via-blue-700
            to-cyan-600
            bg-clip-text
            min-w-full
          "
        >
          <client-only placeholder="">
            <v-typical
              class="
                blink
                text-white
                font-techinca
                text-2xl text-white-100 text-transparent
              "
              :steps="['', 200, random_greeting, 1000]"
              :loop="1"
              :wrapper="'h2'"
            ></v-typical>
          </client-only>
          <!-- <h1 class="text-transparent">WELCOME BACK</h1> -->
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="
                block
                text-gray-500
                font-bold
                md:text-right
                mb-1
                md:mb-0
                pr-4
              "
              for="inline-full-name"
              placeholder="Email"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:bg-white focus:border-blue-500
                font-roboto font-medium
              "
              id="inline-full-name"
              type="text"
              placeholder="you@yourmail.org"
              v-model="email"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="
                block
                text-gray-500
                font-bold
                md:text-right
                mb-1
                md:mb-0
                pr-4
              "
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:bg-white focus:border-blue-500
              "
              id="inline-password"
              type="password"
              placeholder="******************"
              v-model="password"
            />
          </div>
        </div>
        <div
          class="
            block
            border border-2 border-gray-300
            rounded-lg
            p-1
            font-technica
            shadow-md shadow-gray-200
            m-8
            mt-4
            mb-4
            hover:scale-110
            hover:shadow-xl
            hover:shadow-blue-200
            hover:border-blue-400
            duration-200
          "
        >
          <button
            class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
            @click="
              signInWithEmail(email, password, $supabase);
              navigateTo('/Thoughts');
            "
            type="button"
          >
            Authenticate
          </button>
        </div>
        <div
          class="
            block
            border border-2 border-gray-300
            rounded-lg
            p-1
            font-technica
            shadow-md shadow-gray-200
            m-8
            mt-4
            mb-4
            hover:scale-110
            hover:shadow-xl
            hover:shadow-blue-200
            hover:border-blue-400
            duration-200
          "
        >
          <button
            class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
            @click="get_user($supabase)"
            type="button"
          >
            Get user
          </button>
        </div>
        <div
          class="
            block
            border border-2 border-gray-300
            rounded-lg
            p-1
            font-technica
            shadow-md shadow-gray-200
            m-8
            mt-4
            mb-4
            hover:scale-110
            hover:shadow-xl
            hover:shadow-blue-200
            hover:border-blue-400
            duration-200
          "
        >
          <button
            class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
            @click="log_out($supabase)"
            type="button"
          >
            Log out
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Imports
import VTypical from 'vue-typical';
import { useAuthStore } from '@/store/authStore';
import { useAuth } from '~/composables/useAuth';

// unpacking initialised supabase plugin
const { $supabase } = useNuxtApp();

// Accessing store
const authStore = useAuthStore();
console.log('this is fyuck', authStore.user);
// unpacking auth functions
const { get_user, log_out, signInWithEmail } = useAuth();

// Logging in
var email = '';
var password = '';

// random greeting generation
const greetings = [
  'Hark! Thou art returned! Welcome back, fair traveler.',
  'Avatar 2 was perfection.',
  'All hail! The prodigal has returned. Welcome home.',
  "Verily, 'tis good to see thee back amongst us. Welcome home, dear friend.",
  'Prithee, let us raise a goblet to thy safe return. Welcome back, brave adventurer.',
  'Hark! The wanderer has returned. Welcome back to thy rightful place.',
  "Thou art back! 'Tis a pleasure to have thee amongst us once more. Welcome!",
  'Welcome home, fair adventurer! Thy tales shall be heard with glee',
  'The hearth fire burns bright with thy return. Welcome back dear friend',
  'The kingdom rejoices, for the wanderer has returned. Welcome back',
  'Behold! Our hero has returned. Welcome back to thy stronghold',
  'Welcome home! Thy presence graces us once more',
  "We've been awaiting thy return, welcome back dear traveler",
  'Welcome back from thy journey, the banquet table is laid in thy honor',
  "Thou hast returned! 'Tis good to see thee. Welcome back",
];
function set_greeting() {
  random_greeting = greetings[Math.floor(Math.random() * greetings.length)];
}
var random_greeting = ref('');
set_greeting();
</script>

<style></style>
