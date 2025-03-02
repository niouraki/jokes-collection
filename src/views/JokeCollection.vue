<script setup lang="ts">
import {useJokesStore} from "@/stores/jokes.ts";
import JokesList from "@/components/JokesList.vue";

const store = useJokesStore();
</script>

<template>
  <main>
    <h1 class="text-center text-3xl pb-4">Favourite jokes</h1>

    <jokes-list :jokes="store.jokeCollection" :empty-state="'Please add some favourite jokes to your collection!'"></jokes-list>
  </main>
</template>
