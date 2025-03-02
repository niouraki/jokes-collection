<script setup lang="ts">
import WarningIcon from "@/components/svg/WarningIcon.vue";
import CloseIcon from "@/components/svg/CloseIcon.vue";

const model = defineModel()
</script>

<template>
  <transition name="fade">
    <div class="fixed flex gap-4 items-center w-full max-w-sm p-4 space-x-4 text-gray-500 bg-white rounded-lg shadow-sm right-5 bottom-5" role="alert">
      <warning-icon></warning-icon>
      <div class="text-sm font-normal">We couldn't get new jokes. Please try again.</div>
      <close-icon @click="model = false" class="cursor-pointer"></close-icon>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
