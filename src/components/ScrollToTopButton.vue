<template>
  <button 
    v-show="isVisible" 
    @click="scrollToTop"
    aria-label="Voltar ao Topo da Página"
    class="fixed bottom-8 right-8 
           btn btn-circle btn-success shadow-lg 
           opacity-0 transition-opacity duration-300 ease-in-out 
           scale-95 hover:scale-100 z-50"
    :class="{ 'opacity-100': isVisible }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-6 w-6" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Variável reativa para controlar a visibilidade do botão
const isVisible = ref(false);

// Define a posição de scroll em que o botão deve aparecer (ex: 300px)
const SCROLL_THRESHOLD = 300; 

// Função que verifica a posição de scroll e atualiza 'isVisible'
const handleScroll = () => {
  // window.scrollY retorna a posição vertical atual do scroll
  isVisible.value = window.scrollY > SCROLL_THRESHOLD;
};

// Função para rolar a página suavemente para o topo (posição 0)
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rola suavemente em vez de pular
  });
};

// Ciclo de Vida: Adiciona o listener de scroll ao montar o componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Ciclo de Vida: Remove o listener de scroll ao desmontar o componente (limpeza)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>