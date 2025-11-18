<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    
    <router-view /> 
    
    <Footer />

    <ScrollToTopButton /> 
  </div>
</template>
