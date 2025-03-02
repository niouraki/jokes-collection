<script setup lang="ts">
import { defineProps } from 'vue';
import type {Joke} from "@/types.ts";
import type { PropType } from 'vue';

const props = defineProps({
  jokes: {
    type: Array as PropType<Joke[]>,
    required: true,
  }
})

</script>

<template>
  <div class="grid grid-cols-4 gap-4" v-if="jokes.length > 0">
    <div
      v-for="joke in props.jokes"
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
