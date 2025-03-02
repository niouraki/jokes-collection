<script setup lang="ts">
import { computed } from 'vue'
import {useJokesStore} from "@/stores/jokes.ts";
import JokesList from "@/components/JokesList.vue";

const store = useJokesStore();

const calculateAverageRating = computed(() => {
  // get only the jokes that have rating
  const ratedJokes = store.jokeCollection.filter((joke) => joke.rating)

  if (ratedJokes.length === 0) return 0

  const total = ratedJokes.reduce((sum, joke) => sum + (joke.rating ?? 0), 0)
  return Math.round(total / ratedJokes.length)
})
</script>

<template>
  <main>
    <h1 class="text-center text-3xl pb-4">Favourite jokes</h1>

    <div v-if="store.jokeCollection.length > 0" class="pb-4">
      <p>Total jokes saved: {{store.jokeCollection.length}}</p>
      <p>Average rating: {{calculateAverageRating}}</p>
    </div>


    <jokes-list :jokes="store.jokeCollection" :empty-state="'Please add some favourite jokes to your collection!'"></jokes-list>
  </main>
</template>
