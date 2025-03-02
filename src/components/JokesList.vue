<script setup lang="ts">
import { defineProps } from 'vue';
import type {Joke} from "@/types.ts";
import type { PropType } from 'vue';
import { useRoute } from 'vue-router'
import {useJokesStore} from "@/stores/jokes.ts";
import SaveIcon from "@/components/svg/SaveIcon.vue";
import DeleteIcon from "@/components/svg/DeleteIcon.vue";
import SingleJoke from "@/components/SingleJoke.vue";
import StarIcon from "@/components/svg/StarIcon.vue";

const store = useJokesStore();
const route = useRoute()
const props = defineProps({
  jokes: {
    type: Array as PropType<Joke[]>,
    required: true,
  },
  emptyState: {
    type: String,
    required: true,
  }
})

function calculateHeartFill(jokeId: number) {
  if (store.jokeCollection.some(collectionJoke => collectionJoke.id === jokeId))
    return '#F76D57'

  return '#FFFFFF'
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-if="jokes.length > 0">
    <div
      v-for="joke in props.jokes"
      :key="joke.id"
      class="rounded-md border-2 border-zinc-400/50 "
    >
      <div class="flex pt-4 px-4" :class="route.name === 'home' ? 'justify-end' : 'justify-between'">
        <div v-if="route.name === 'collection'" class="flex cursor-pointer">
          <star-icon
            v-for="n in 5"
            :key="n"
            class="pr-1"
            :fill="n <= (store.getStarRating(joke.id) ?? 0) ? '#FACC15' : 'none'"
            @click="store.saveStarRating(joke.id, n)"
          ></star-icon>
        </div>
        <div class="cursor-pointer">
          <save-icon v-if="route.name === 'home'" :heartFill="calculateHeartFill(joke.id)" @click="store.saveJokeToCollection(joke)"></save-icon>
          <delete-icon v-else @click="store.removeJokeFromCollection(joke.id)"></delete-icon>
        </div>
      </div>

      <single-joke :joke="joke"></single-joke>
    </div>
  </div>

  <div v-else class="text-center text-2xl py-12">{{emptyState}}</div>
</template>
