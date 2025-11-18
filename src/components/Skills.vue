<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
  ScrollReveal().reveal('#habilidades h2', {
    delay: 100,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  // Anima cada card de habilidade individualmente
  ScrollReveal().reveal('.skill-item', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 80, // Pequeno delay entre cada item para efeito de cascata
  });
});
</script>

<template>
  <section id="habilidades" class="py-24 bg-base-100 relative overflow-hidden">

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

    <div class="container mx-auto px-6 relative z-10">

      <h4 class="text-2xl font-bold mb-12 text-success uppercase text-center">Minhas Habilidades</h4>

      <div class="flex flex-col items-center md:flex-row md:items-start md:space-x-12">

        <div class="md:w-1/3 mb-10 md:mb-0 max-w-sm flex justify-center">
          <img src="/src/assets/Collab-bro.png" alt="Ilustração de Atividade de Desenvolvedor"
            class="w-full h-auto hero-pan-image slow-pan">
        </div>

        <div class="md:w-2/3">

          <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-purple-600 ">
              <img src="/src/assets/icon/php-svgrepo-com.svg" alt="Logo PHP" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">PHP</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-red-500">
              <img src="/src/assets/icon/laravel-svgrepo-com.svg" alt="Logo Laravel"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Laravel</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-blue-600">
              <img src="/src/assets/icon/mysql-svgrepo-com.svg" alt="Logo MySQL" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">MySQL</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-yellow-400">
              <img src="/src/assets/icon/javascript-svgrepo-com.svg" alt="Logo JavaScript"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">JavaScript</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-green-500">
              <img src="/src/assets/icon/vue-9-logo-svgrepo-com.svg" alt="Logo Vue.js"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Vue.js</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-blue-700">
              <img src="/src/assets/icon/jquery-svgrepo-com.svg" alt="Logo Jquery"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">JQuery</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-orange-600">
              <img src="/src/assets/icon/html-5-svgrepo-com.svg" alt="Logo HTML5" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">HTML5</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-blue-500">
              <img src="/src/assets/icon/css-3.svg" alt="Logo CSS3" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">CSS3</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-cyan-500">
              <img src="/src/assets/icon/tailwind-svgrepo-com.svg" alt="Logo Tailwind CSS"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Tailwind CSS</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-purple-700">
              <img src="/src/assets/icon/bootstrap-4.svg" alt="Logo Bootstrap" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Bootstrap</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-purple-700">
              <img src="/src/assets/icon/inertiajs-plain.svg" alt="Logo Inertia.Js" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Inertia.js</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-purple-700">
              <img src="/src/assets/icon/pwa-svgrepo-com.svg" alt="Logo PWA"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">PWA</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-orange-600">
              <img src="/src/assets/icon/git-svgrepo-com.svg" alt="Logo Git" class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">Git</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-gray-700">
              <img src="/src/assets/icon/github-142-svgrepo-com.svg" alt="Logo Github"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">GitHub</span>
            </div>

            <div
              class="skill-item flex flex-col items-center justify-center p-4 bg-base-200 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-blue-500">
              <img src="/src/assets/icon/vs-code-svgrepo-com.svg" alt="Logo VScod"
                class="w-12 h-12 mb-3 object-contain">
              <span class="text-sm font-medium">VScod</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.delius-regular {
  font-family: "Delius", cursive;
  font-weight: 900;
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