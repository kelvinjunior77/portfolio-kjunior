<template>
  <footer class="footer footer-center  p-10 bg-base-200 text-base-content">
    <aside class="mt-6">
      <p class="text-1xl font-bold text-error">
        Kelvin Junior - Desenvolvedor Web
      </p> 
      <p>&copy; 2025 - {{ currentYear }} - Todos os direitos reservados.</p>
      <p>Feito com:
         <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><span class="text-success font-bold">Vue.js</span></a> e 
         
         <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer"><span class="font-bold">DaisyUI</span></a></p> 
    </aside> 
  
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

</script>