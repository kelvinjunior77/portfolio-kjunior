<script setup>
import { onMounted } from 'vue';
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
</script>

<template>
  <section id="home" class="hero min-h-screen pt-20 relative overflow-hidden">

    <div class="bubbles">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
    </div>

    <div class="hero-content  relative z-10 flex-col lg:flex-row-reverse">
      <div class="hero-image animate-bounce-subtle ">
        <div
          class="avatar w-64 h-64 md:w-96 md:h-96 rounded-full bg-base-300  flex items-center justify-center overflow-hidden  hero-pan-image slow-pan">
          <img src="/src/assets/Innovation-bro.png" alt="Foto" class="object-cover  w-full h-full">
        </div>
      </div>

      <div class="max-w-2xl text-center lg:text-left">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight hero-title ">
          Olá, eu sou
          <span class="text-success text-7xl permanent-marker">
            K.Junior
          </span>
        </h1>

        <p class="py-6 text-xl hero-subtitle  delius-regular">
          Desenvolvedor Web Full-Stack especializado em criar experiências digitais incríveis.
        </p>
        <div class="flex justify-center lg:justify-start space-x-4 hero-actions">
          <a href="#projetos" class="btn btn-success font-medium btn-outline btn-lg 
          hover:text-green-500 hover:bg-base-100 hover:border-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-check-check-icon lucide-check-check">
              <path d="M18 6 7 17l-5-5" />
              <path d="m22 10-7.5 7.5L13 16" />
            </svg>
            Meus Projetos</a>
          <a href="#contato" class="btn btn-ghost font-medium bg-base-200 btn-lg shadow-lg
          hover:bg-white hover:text-black">Fale Comigo</a>
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
  background-color: #059669;
  /* Bolhas brancas com transparência */
  animation: animateBubbles 25s linear infinite;
  /* Animação principal */
  bottom: -150px;
  /* Começa abaixo da tela */
  border-radius: 50%;
  /* Faz com que sejam círculos */
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