<script setup>
import { ref, onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'

// estado reativo para controlar a expansão
const isExpanded = ref(false)

// Função para inverter o estado
function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

// Lógica do ScrollReveal
onMounted(() => {
  
  ScrollReveal().reveal('#sobre h2', {
    delay: 100,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  ScrollReveal().reveal('#sobre .texto-inicial', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  ScrollReveal().reveal('#sobre .toggle-button', {
    delay: 300,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
});
</script>

<template>
  <section id="sobre" class="bg-base-200 py-24 overflow-hidden">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-2xl font-bold mb-6 uppercase text-success">Sobre Mim</h2>

      <div class="max-w-3xl mx-auto text-lg leading-relaxed text-base-content/80">

        <p class="texto-inicial text-justify ">
          Olá! Sou Kelvin Junior, desenvolvedor web com experiência em criação de sites modernos, sistemas
          personalizados e
          soluções responsivas que funcionam de verdade. Trabalho com foco em performance, segurança e usabilidade,
          entregando projetos que fazem diferença para empresas e pessoas.
        </p>

        <div class="transition-all duration-700 ease-in-out overflow-hidden"
          :class="isExpanded ? 'max-h-[1000px] mt-6' : 'max-h-0'">

          <div class="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">

            <div class="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-lg flex-shrink-0 mx-auto md:mx-0">
              <img src="/src/assets/kjunior.jpg" alt="Ilustração sobre desenvolvimento"
                class="w-full h-full scale-125  transition duration-300 ease-in-out hover:scale-110 object-contain" />
            </div>

            <div class="flex-grow">
              <p class="text-justify">
                Minha jornada na programação começou há 5 anos, e desde então, tenho me dedicado a aprender e dominar
                tecnologias de front-end e back-end. Acredito que um bom software não é apenas funcional, mas também
                intuitivo e esteticamente agradável.
              </p>

              <p class="text-justify">Atuo como desenvolvedor web há vários anos, participando de diversos projetos para
                clientes de
                diferentes
                setores, tanto em Angola quanto no exterior. Tenho experiência com sistemas sob medida, sites
                institucionais, e-commerces, plataformas de gestão, integrações com APIs e muito mais.</p>
            </div>
          </div>


          <p class="mt-4 text-justify">
            Trabalho com metodologias ágeis, sempre prezando por organização, comunicação clara e entregas pontuais. Meu
            foco está em entregar código limpo, funcional e sustentável, sempre pensando na escalabilidade e facilidade
            de manutenção.

            Se você busca alguém com experiência real de mercado, visão prática e comprometimento com resultados, pode
            contar comigo.
          </p>

          <p class="mt-4 text-justify">
            Especialidades:
          <ul class="text-justify list-disc list-inside mt-2 text-error">
            <li>Desenvolvimento com PHP, Laravel, JavaScript, Vue.js</li>
            <li>Criação de bancos de dados eficientes com MySQL</li>
            <li>Integrações com APIs e sistemas de terceiros</li>
            <li>Layouts responsivos com HTML5, CSS3, Bootstrap, Tailwind CSS</li>
          </ul>
          </p>

          <p class="text-justify mt-4">
            Já colaborei com:
          <ul class="list-disc list-inside mt-2 text-justify text-primary">
            <li>Pequenas empresas buscando presença online</li>
            <li>Profissionais autônomos que precisavam de soluções personalizadas</li>
            <li>Equipes técnicas que precisavam de reforço em projetos complexos</li>
          </ul>
          </p>

        </div>
      </div>

      <button @click="toggleExpand" class="btn text-success btn-outline mt-8 toggle-button  hover:text-green-500 hover:bg-base-100 hover:border-green-500">
        {{ isExpanded ? 'Ver Menos' : 'Ver Mais' }}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-5 h-5 ml-2 transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

    </div>
  </section>
</template>

<style scoped>

.delius-regular {
  font-family: "Delius", cursive;
  font-style: normal;
}


</style>

<!------- 

 
<div class="mb-4 p-2">
        <div class="badge badge-soft badge-primary">Primary</div>
        <div class="badge badge-soft badge-secondary">Secondary</div>
        <div class="badge badge-soft badge-accent">Accent</div>
        <div class="badge badge-soft badge-info">Info</div>
        <div class="badge badge-soft badge-success">Success</div>
        <div class="badge badge-soft badge-warning">Warning</div>
        <div class="badge badge-soft badge-error">Error</div>
      </div>-
     
      --------->