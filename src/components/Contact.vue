<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
  ScrollReveal().reveal('#contato h2', {
    delay: 100,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  ScrollReveal().reveal('#contato p', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  ScrollReveal().reveal('#contato .btn', {
    delay: 300,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  ScrollReveal().reveal('#contato .space-x-8', {
    delay: 400,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
});
</script>

<template>
  <section id="contato" class="py-24 bg-base-300 relative overflow-hidden">

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

      <div class="flex flex-col items-center md:flex-row-reverse justify-center md:space-x-reverse md:space-x-8">

        <div class="mb-8 md:mb-0 md:w-1/2 max-w-sm flex justify-center hero-pan-image slow-pan">
          <img src="/src/assets/Mention-amico.png" width="300" alt="Ilustração de contato" class="block" />
        </div>

        <div class="md:w-1/3 text-center md:text-left">
          <h2 class="text-2xl font-bold mb-0 uppercase text-success">Vamos Conversar ?</h2>
          <h2 class="text-2xl mb-6 text-success">para iniciar o seu projeto</h2>

          <p class="max-w-xl mx-auto md:mx-0 text-lg text-base-content/80 mb-8 delius-regular">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo.
          </p>

          <div class="flex flex-col items-center md:items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-12">

            <a href="https://wa.me/+33753282632" target="_blank" rel="noopener noreferrer"
              class="btn btn-success btn-lg shadow-lg w-full sm:w-auto">

              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-whatsapp"
                viewBox="0 0 16 16">
                <path
                  d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>

            </a>

            <a href="mailto:kelvinjunior592@gmail.com" class="btn btn-lg shadow-lg w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-mail-icon lucide-mail">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              kelvinjunior592@gmail.com
            </a>
            
          </div>

          <div class="flex flex-col items-center md:items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-12">


            <a href=" https://code-tree.dev/kelvinjunior77-185" class="btn btn-lg shadow-lg w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trees-icon lucide-trees"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></svg>
              https://code-tree.dev/kelvinjunior77-185
            </a>
            
          </div>

          <div class="flex justify-center md:justify-start space-x-8 mt-12">
            <a href="https://www.instagram.com/kelvinjunior442/" target="_blank"
              class="link link-hover text-base-content/70 hover:text-error transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://github.com/kelvinjunior77" target="_blank"
              class="link link-hover text-base-content/70 hover:text-amber-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
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