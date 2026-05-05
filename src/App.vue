<template>
  <div id="app">
    <PageLoader :isLoading="isLoading" />

    <div :class="{ 'opacity-100 transition-opacity duration-700': !isLoading, 'opacity-0': isLoading }">
        <Navbar v-if="!esconderLayout"/>
        <router-view />
        <ScrollToTopButton />
        <Footer v-if="!esconderLayout"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageLoader from './components/PageLoader.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
import router from '../router';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// carregamento
const isLoading = ref(true); 

// Lógica de carregamento
onMounted(() => {
    
    setTimeout(() => {
        isLoading.value = false; 
    }, 1000); 
});

const rotasSemNav = ['Blogue', 'Post_1', 'Admin'];

// Cverificar rota atual
const esconderLayout = computed(() => {
  return rotasSemNav.includes(route.name);
});

</script>