<script setup lang="ts">
import {computed, ref} from 'vue'
import {useJokesStore} from "@/stores/jokes.ts";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import JokesList from "@/components/JokesList.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const store = useJokesStore();
const toggleSwitch = ref<boolean>(false)

if (store.jokes.length === 0)
  store.getJokes()

const calculateJokes = computed(() => {
  if (!toggleSwitch.value) {
    return store.jokes
  } else {
    return store.jokes.filter(joke => joke.type === 'programming')
  }
})
</script>

<template>
  <main>
    <h1 class="text-center text-3xl pb-4">List of jokes</h1>

    <toggle-switch v-model="toggleSwitch">
      <div>
        <p class="font-medium">
          Developer jokes
        </p>
        <p class="text-slate-500">
          Toggle on to display only developer jokes
        </p>
      </div>
    </toggle-switch>

    <jokes-list v-if="!store.isLoading || (store.isLoading && store.jokes.length > 0)" :jokes="calculateJokes"></jokes-list>
    <loading-component v-else-if="store.isLoading && store.jokes.length === 0"></loading-component>

    <button
      v-if="store.jokes.length > 0"
      class="load-more-button flex items-center gap-2 rounded-md border border-slate-300 p-4 text-center text-md transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      @click="store.getJokes()"
    >
      Load more jokes
      <svg v-if="store.isLoading" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </button>
  </main>
</template>

<style scoped>
.load-more-button {
  margin: 24px auto 0 auto;
}
</style>
