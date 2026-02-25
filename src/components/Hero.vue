<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
  // Animação para o título principal
  ScrollReveal().reveal('.hero-title', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });

  // Animação para o parágrafo
  ScrollReveal().reveal('.hero-subtitle', {
    delay: 400,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });

  // Animação para os botões
  ScrollReveal().reveal('.hero-actions', {
    delay: 600,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 100, // Anima cada botão separadamente
  });

  // Animação para a imagem (com um pequeno bounce)
  ScrollReveal().reveal('.hero-image', {
    delay: 800,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    easing: 'ease-out',
  });
});

// 1. Definimos apenas a base das cores para facilitar
const variantes = ['success', 'primary', 'secondary', 'accent'];
const variantesFundo = ['bg-success', 'bg-primary', 'bg-secondary', 'bg-accent', 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500'];

// 2. Criamos as variáveis reativas
const corAtual = ref('text-success'); // Para o texto
const fundoAtual = ref(variantesFundo[0]);

let intervalo = null;

onMounted(() => {
  let i = 0;

  // Criamos APENAS UM intervalo que controla tudo ao mesmo tempo
  intervalo = setInterval(() => {
    // Avança para o próximo índice do array
    i = (i + 1) % variantes.length;

    // Atualiza o texto e o fundo simultaneamente
    corAtual.value = `text-${variantes[i]}`;
    fundoAtual.value = `bg-${variantes[i]}`;

   // console.log("Mudando para:", variantes[i]); // Debug para ver no console se está a funcionar
  }, 2000); // segundos
});

onUnmounted(() => {
  // Limpa o intervalo para evitar problemas de performance
  if (intervalo) clearInterval(intervalo);
});



onUnmounted(() => {
  clearInterval(intervalo);
});
</script>

<template>
  <section id="home" class="hero min-h-screen pt-20 relative overflow-hidden">

    <div class="bubbles">
      <div v-for="n in 10" :key="n" class="bubble transition-colors duration-[2000ms] ease-in-out" :class="fundoAtual">
      </div>
    </div>

    <div class="hero-content relative z-10 flex-col lg:flex-row-reverse">

      <div class="hero-image animate-bounce-subtle">
        <div
          class="avatar w-64 h-64 md:w-96 md:h-96 rounded-full bg-base-300 flex items-center justify-center overflow-hidden hero-pan-image slow-pan">
          <img src="/src/assets/Innovation-bro.png" alt="Innovation-bro" class="object-cover w-full h-full">
        </div>
      </div>

      <div class="max-w-2xl text-center lg:text-left">

        <h1 class="hero-title leading-tight mb-4">
          <span class="block text-3xl md:text-4xl font-bold mb-2">
            Olá, eu sou <span class="text-success text-5xl md:text-6xl permanent-marker">K.Junior</span>
          </span>
          <span class="block text-5xl md:text-7xl font-extrabold text-base-content mt-2" :class="corAtual">
            Desenvolvedor Web
          </span>
        </h1>

        <p class="py-4 text-xl hero-subtitle delius-regular text-base-content/80">
          Especializado em criar experiências digitais incríveis.
        </p>

        <div class="flex justify-center lg:justify-start space-x-4 hero-actions mt-4">
          <a href="#projetos"
            class="btn btn-success font-medium btn-outline btn-lg hover:text-green-500 hover:bg-base-100 hover:border-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-check-check">
              <path d="M18 6 7 17l-5-5" />
              <path d="m22 10-7.5 7.5L13 16" />
            </svg>
            Meus Projetos
          </a>
          <a href="#contato"
            class="btn btn-ghost font-medium bg-base-200 btn-lg shadow-lg hover:bg-white hover:text-black">
            Fale Comigo
          </a>
        </div>

        <div class="mt-8 flex justify-center lg:justify-start gap-6 items-center">

          <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer"
            class="text-base-content/70 hover:text-success hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer"
            class="text-base-content/70 hover:text-success hover:scale-110 transition-all duration-300"
            aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
              </path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <a href="https://instagram.com/seuperfil" target="_blank" rel="noopener noreferrer"
            class="text-base-content/70 hover:text-success hover:scale-110 transition-all duration-300"
            aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.permanent-marker {
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
}

.delius-regular {
  font-family: "Delius", cursive;
  font-weight: 400;
  font-style: normal;
}


@keyframes slow-pan {
  0% {
    transform: translateY(-4%);
  }

  100% {
    transform: translateY(-4%);
  }

  50% {
    transform: translateY(4%);
  }
}

.hero-pan-image {
  animation: slow-pan 2.5s infinite ease-in-out;
}

/* Estilos para o contêiner das bolhas */
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* Garante que as bolhas não saiam da seção */
  z-index: 0;
  /* Fundo verde para a animação */
}

/* Estilos para cada bolha individual */
.bubble {
  position: absolute;
  display: block;
  list-style: none;
  /*background-color: #059669;
   Bolhas brancas com transparência */
  animation: animateBubbles 25s linear infinite;
  /* Animação principal */
  bottom: -150px;
  /* Começa abaixo da tela */
  border-radius: 50%;
 
  transition: background-color 2000ms ease-in-out;
}

/* Tamanhos e posições aleatórias para as bolhas */
.bubble:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.bubble:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.bubble:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  animation-duration: 20s;
}

.bubble:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.bubble:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 10s;
}

.bubble:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
  animation-duration: 25s;
}

.bubble:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
  animation-duration: 14s;
}

.bubble:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 16s;
}

.bubble:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.bubble:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

/* Keyframes da animação das bolhas */
@keyframes animateBubbles {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
    border-radius: 50%;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>