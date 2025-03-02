<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  joke: {
    type: Object,
    required: true,
  }
})

const isFlipped = ref(false);
const capitalizedType = computed(() => {
  return props.joke.type[0].toUpperCase() + props.joke.type.slice(1)
})
</script>

<template>
  <div class="group text-center p-8">
    <div
      class="relative h-40 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] cursor-pointer"
      :class="{ '[transform:rotateY(180deg)]': isFlipped }"
      @click="isFlipped = !isFlipped"
    >
      <!--          front side of card-->
      <div class="absolute inset-0 h-full w-full p-6 rounded-xl [backface-visibility:hidden] bg-slate-600 text-white">
        <h2 class="font-semibold">{{capitalizedType}} joke</h2>
        <p>{{joke.setup}}</p>
      </div>
      <!--          back side of card-->
      <div class="absolute inset-0 h-full w-full p-6 rounded-xl px-12 bg-red-500 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {{joke.punchline}}
      </div>
    </div>
  </div>
</template>
