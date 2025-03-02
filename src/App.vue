<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useJokesStore} from "@/stores/jokes.ts";
import ToastNotification from "@/components/ToastNotification.vue";
const store = useJokesStore();

store.getJokes()
store.jokeCollection = JSON.parse(localStorage.getItem("jokeCollection") || "[]")

</script>

<template>
  <header>
      <nav class="flex justify-end border-b-[1px] border-slate-400">
        <RouterLink to="/" class="px-5" activeClass="border-b-2 border-b-slate-400">Joke Discovery</RouterLink>
        <RouterLink to="/collection" activeClass="border-b-2 border-b-slate-400" class="px-5">Joke Collection</RouterLink>
      </nav>
  </header>

  <RouterView />
  <toast-notification v-show="store.showNotification" v-model="store.showNotification"></toast-notification>
</template>

<style scoped>
</style>
