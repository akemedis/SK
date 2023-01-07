<template>
  <div>
    <header>
      <div class="min-h-full max-w-full">
        <nav class="bg-gradient-to-r from-blue-700 to-cyan-600">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex pt-2 pb-2 items-center justify-between">
              <div class="flex items-center">
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <!-- <h2 class="text-white font-anu text-2xl text-white-100">
                      SERAJ KOTAGAMA
                    </h2> -->
                    <v-typical
                      class="blink text-white font-anu text-2xl text-white-100"
                      :steps="['', 200, 'ELON MU', 500, 'SERAJ KOTAGAMA', 1000]"
                      :loop="1"
                      :wrapper="'h2'"
                    ></v-typical>
                    <navbutton :title="'Thoughts'" :link="'Thoughts'" />
                    <navbutton :title="'Essays'" :link="'Essays'" />
                    <!-- <navbutton :title="'Visual Diary'" :link="'VisualDiary'" /> -->
                    <navbutton
                      :title="'Biotechnology'"
                      :link="'Biotechnology'"
                    />
                    <!-- <navbutton :title="'Consultancy'" :link="'Consultancy'" /> -->
                    <navbutton :title="'Login'" :link="'/authenticate'" />
                    <navbutton :title="'Signup'" :link="'/signup'" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="md:hidden" id="mobile-menu">
            <div
              class="
                space-y-1
                px-2
                pt-2
                pb-3
                sm:px-3
                flex flex-wrap
                justify-center
              "
            >
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <!-- <h2
                class="
                  text-white
                  font-anu
                  text-2xl text-white-100
                  block
                  px-3
                  py-2
                "
              >
                SERAJ KOTAGAMA
              </h2> -->
              <v-typical
                class="blink text-white font-anu text-2xl text-white-100"
                :steps="['', 200, 'ELON MUS', 500, 'SERAJ KOTAGAMA', 1000]"
                :loop="1"
                :wrapper="'h2'"
              ></v-typical>
              <navbutton :title="'Thoughts'" :link="'Thoughts'" />
              <navbutton :title="'Essays'" :link="'Essays'" />
              <!-- <navbutton :title="'Visual Diary'" :link="'VisualDiary'" /> -->
              <navbutton :title="'Biotechnology'" :link="'Biotechnology'" />
              <!-- <navbutton :title="'Consultancy'" :link="'Consultancy'" /> -->
              <navbutton :title="'Login'" :link="'/authenticate'" />
              <navbutton :title="'Signup'" :link="'/signup'" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import VTypical from 'vue-typical';
</script>

<style></style>
