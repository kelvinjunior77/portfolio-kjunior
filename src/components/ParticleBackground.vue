<template>
  <vue-particles
    id="tsparticles"
    :options="particlesOptions"
    class="particle-background"
  />
</template>

<script setup>
import { reactive } from 'vue';

// Definição das opções da animação
const particlesOptions = reactive({
  fullScreen: { 
    enable: false // MUITO IMPORTANTE: Mantenha como 'false'
  },
  background: {
    color: { 
      value: '#059669' // O fundo VERDE que você pediu
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      grab: { distance: 150, links: { opacity: 0.8 } },
    },
  },
  particles: {
    color: { 
      value: '#ffffff' // Partículas BRANCAS
    },
    links: {
      color: '#ffffff', // Links BRANCOS
      distance: 150,
      enable: true,
      opacity: 0.5, // Opacidade dos links
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: false,
      speed: 1, // Velocidade
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80, // Quantidade de partículas
    },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } }, // Tamanho das partículas
  },
  detectRetina: true,
});
</script>

<style scoped>
/* Este CSS é ESSENCIAL. 
  Ele faz a animação preencher o contêiner pai.
*/
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Fica no fundo */
}
</style>