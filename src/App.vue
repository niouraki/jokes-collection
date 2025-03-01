<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Joke Discovery</RouterLink>
        <RouterLink to="/collection">Joke Collection</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
