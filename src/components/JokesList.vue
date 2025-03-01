<script setup lang="ts">
import {useJokesStore} from "@/stores/jokes.ts";
import {computed} from "vue";
const store = useJokesStore();

const props = defineProps({
  toggleSwitch: {
    type: Boolean,
  }
})

const calculateJokes = computed(() => {
  if (!props.toggleSwitch) {
    return store.jokes
  } else {
    return store.jokes.filter(joke => joke.type === 'programming')
  }

})
</script>

<template>
  <div class="grid grid-cols-4 gap-4" v-if="calculateJokes.length > 0">
    <div
      v-for="joke in calculateJokes"
      :key="joke.id"
      class="rounded-md border-2 border-zinc-400/50 group h-40 [perspective:1000px] text-center"
    >
      <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <!--          front side of card-->
        <div class="absolute inset-0 h-full w-full p-6 rounded-xl [backface-visibility:hidden]">
          <h2>Joke type: {{joke.type}}</h2>
          <p>{{joke.setup}}</p>
        </div>
        <!--          back side of card-->
        <div class="absolute inset-0 h-full w-full p-6 rounded-xl px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {{joke.punchline}}
        </div>
      </div>
    </div>
  </div>

  <div v-else>No jokes to show</div>
</template>
