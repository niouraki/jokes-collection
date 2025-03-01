<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="n in 10" :key="n" class="h-40">
      <div class="mx-auto h-full w-full max-w-sm rounded-md border border-zinc-400/50 p-4">
        <div class="flex flex-col animate-pulse p-6">
          <div v-for="n in 3" :key="n" class="space-y-6 py-1">
            <div class="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
