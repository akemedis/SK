<template>
  <header>
    <nav>
      <div
        class="
          flex flex-wrap
          bg-gradient-to-r
          from-blue-700
          to-cyan-600
          p-4
          justify-center
        "
      >
        <v-typical
          class="blink text-white font-anu text-2xl text-white-100"
          :steps="['', 200, 'ENVISION', 500, 'BUILD', 500, 'HOLY SHIT', 1000]"
          :loop="infinity"
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
    </nav>
  </header>
</template>

<script setup>
import VTypical from 'vue-typical';
</script>

<style></style>
