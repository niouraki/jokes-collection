<script setup lang="ts">
import {useJokesStore} from "@/stores/jokes.ts";
const store = useJokesStore();
const model = defineModel()
</script>

<template>
<!--  component from https://www.material-tailwind.com/docs/html/switch-->
  <div class="inline-flex gap-2 pb-6">
    <div class="relative inline-block w-11 h-5">
      <input v-model="model" :disabled="store.isLoading" id="switch-component-desc" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
      <label for="switch-component-desc" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>

    <label for="switch-component-desc" class="text-slate-600 text-sm cursor-pointer">
      <slot></slot>
    </label>
  </div>
</template>
