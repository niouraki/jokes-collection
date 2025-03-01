<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="flex justify-end border-b-[1px] border-slate-400">
        <RouterLink to="/" class="px-5">Joke Discovery</RouterLink>
        <RouterLink to="/collection" class="px-5">Joke Collection</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
