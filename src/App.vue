<template>
  <div id="app">
    <PageLoader :isLoading="isLoading" />

    <div :class="{ 'opacity-100 transition-opacity duration-700': !isLoading, 'opacity-0': isLoading }">
        <Navbar />
        <router-view />
        <ScrollToTopButton />
        <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageLoader from './components/PageLoader.vue'; // Ajuste o caminho
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';

// 1. Estado de carregamento
const isLoading = ref(true); 

// 2. Lógica de carregamento
onMounted(() => {
    // 💡 IMPORTANTE: Aqui você pode colocar chamadas de API, 
    // ou usar 'router.isReady()' se preferir.
    
    // Simulação do tempo de carregamento (ex: 2 segundos)
    setTimeout(() => {
        isLoading.value = false; // Define como carregado
    }, 2000); 
});
</script>