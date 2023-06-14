<template>
  <div class="flex justify-center min-h-[100vh]">
    <div class="flex mt-[250px] sm:mt-[150px]">
      <div
        class="
          flex
          justify-center
          max-w-fit
          rounded-2xl
          duration-200
          sm:scale-80 sm:invisible
          h-[500px]
        "
      >
        <form
          class="
            static
            justify-center justify-self-center
            m-1
            p-7
            rounded-2xl
            visible
            sm:visible sm:bg-white sm:p-1
            max-w-sm
          "
          id="sign"
        >
          <div class="flex justify-around max-h-[125px] m-5">
            <div class="flex sm:w-1/4 w-1/4">
              <img src="../assets/images/frog_icon.png" alt="">
            </div>
            <div class="flex flex-wrap justify-start">
              <p class=" text-center font-creatures text-[150%]">
                Ribbit... ribbit..
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex items-center mb-6">
              <div class="">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    mb-1
                    pr-4
                    hidden
                  "
                  for="inline-full-name"
                  placeholder="Email"
                >
                  Email
                </label>
              </div>
              <div class="">
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
                    font-creatures font-medium text-[150%]
                  "
                  id="inline-full-name"
                  type="text"
                  placeholder="Your email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="flex items-center mb-6">
              <div class="">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    pr-4
                    hidden
                  "
                  for="inline-password"
                >
                  Password
                </label>
              </div>
              <div class="w-full">
                <input
                  class="
                    bg-gray-200
                    appearance-none
                    rounded
                    w-full
                    py-2
                    px-4
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-blue-500
                    font-creatures font-medium text-[150%]
                  "
                  id="inline-password"
                  type="password"
                  placeholder="Your password"
                  v-model="password"
                />
              </div>
            </div>
            <div
              class="
                block
                p-1
                m-8
                mt-4
                mb-4
                hover:scale-110
                duration-200
              "
            >
              <button
                class="decoration-red-500 duration-1000 p-1 hover:animate-pulse font-creatures text-[150%]"
                @click="
                  signInWithEmail(email, password, $supabase);
                  navigateTo('/Thoughts');
                "
                type="button"
              >
                Authenticate
              </button>
            </div>
            <!-- <div
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
            </div> -->
            <!-- <div
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
                v-if="authStore.get_user"
                class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
                @click="log_out(authStore.$supabase)"
                type="button"
              >
                Log out
              </button>
            </div> -->
          </div>
        </form>
      </div>
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

// unpacking auth functions
const { get_user, log_out, signInWithEmail } = useAuth();

// Logging in
var email = '';
var password = '';

// random greeting generation
const greetings = [
  'Those who know that they are profound strive for clarity. Those who would like to seem profound to the crowd strive for obscurity. - Friedrich Nietzsche',
  'Societal progress depends on the socially maladjusted - Martin Luther King',
  'Reasonable people adapt themselves to the world, unreasonable people try to adapt the world to themselves, hence human progress depends on unreasonable people. - Vinod Khosla',
  'If you naively believe you can do this, and you go try it, you will actually do more than say not trying it at all. Naivete is an important part of entrepreneurship. - Vinod Khosla',
  'Learn 10 things to know 10,000. - Miyamoto Musashi',
];
function set_greeting() {
  random_greeting = greetings[Math.floor(Math.random() * greetings.length)];
}
var random_greeting = ref('');
set_greeting();
</script>

<style></style>
