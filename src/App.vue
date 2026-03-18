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

// carregamento
const isLoading = ref(true); 

// Lógica de carregamento
onMounted(() => {
    
    setTimeout(() => {
        isLoading.value = false; // Define como carregado
    }, 1000); 
});
</script>