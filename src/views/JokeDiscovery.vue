<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import {useJokesStore} from "@/stores/jokes.ts";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import JokesList from "@/components/JokesList.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const store = useJokesStore();
const toggleSwitch = ref<boolean>(false)

store.getJokes()
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

    <jokes-list v-if="!store.isLoading" :toggle-switch="toggleSwitch"></jokes-list>
    <loading-component v-else></loading-component>
  </main>
</template>
