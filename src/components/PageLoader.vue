<template>
  <div 
    class="fixed inset-0 bg-base-100 flex items-center justify-center z-50 
           transition-opacity duration-700 ease-out"
    :class="{ 'opacity-0 pointer-events-none': !isLoading }"
  >
    <div class="flex flex-col items-center">
        <div class="loading loading-ring loading-lg text-success w-16 h-16 mb-4"></div>
        <p class="text-base-content text-lg"></p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// O componente recebe uma prop booleana para saber se deve mostrar ou esconder
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>