<script setup lang="ts">
import { defineProps } from 'vue';
import type {Joke} from "@/types.ts";
import type { PropType } from 'vue';
import { useRoute } from 'vue-router'
import SaveIcon from "@/components/svg/SaveIcon.vue";
import DeleteIcon from "@/components/svg/DeleteIcon.vue";
import SingleJoke from "@/components/SingleJoke.vue";

const route = useRoute()
const props = defineProps({
  jokes: {
    type: Array as PropType<Joke[]>,
    required: true,
  }
})

</script>

<template>
  <div class="grid grid-cols-3 gap-4" v-if="jokes.length > 0">
    <div
      v-for="joke in props.jokes"
      :key="joke.id"
      class="rounded-md border-2 border-zinc-400/50 "
    >
      <div class="flex justify-end pt-4 pr-4 cursor-pointer">
        <save-icon v-if="route.name === 'home'"></save-icon>
        <delete-icon v-else></delete-icon>
      </div>

      <single-joke :joke="joke"></single-joke>
    </div>
  </div>

  <div v-else class="text-center text-2xl py-12">No available programming jokes. Please load more jokes!</div>
</template>
