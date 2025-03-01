<script setup lang="ts">
import {useJokesStore} from "@/stores/jokes.ts";

const store = useJokesStore();

store.getJokes()
</script>

<template>
  <main>
    <h1>List of jokes</h1>

    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="joke in store.jokes"
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

  </main>
</template>
