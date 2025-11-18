<script setup>
import Navbar from '../src/components/Navbar.vue'
import Hero from '../src/components/Hero.vue'
import About from '../src/components/About.vue'
import Skills from '../src/components/Skills.vue'
import Projects from '../src/components/Projects.vue'
import Contact from '../src/components/Contact.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <div class="bg-base-100">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

<style>

</style>