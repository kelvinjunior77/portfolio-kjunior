<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';
import Modal from './Modal.vue';

onMounted(() => {
  ScrollReveal().reveal('#projetos h2', {
    delay: 100,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
  });
  // Anima cada card de projeto individualmente
  ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    interval: 150, // Maior delay para cards maiores
  });
});

function openModal(modalId) {
  document.getElementById(modalId).showModal();
}
</script>

<template>
  <section id="projetos" class="py-24 bg-base-200 overflow-hidden">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold text-center mb-12 uppercase text-success">Projetos</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          class="card bg-base-100 shadow-xl project-card transform transition-transform duration-300 hover:scale-105">

          <figure class="bg-base-300 overflow-hidden cursor-pointer" @click="openModal('image_modal_gestao')">
            <img src="/src/assets/projetos/gestao-escolar.png" alt="Preview do Projeto Gestão Escolar"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-100">
          </figure>


          <div class="card-body">
            <h3 class="card-title">Sistema de gestão escolar</h3>
            <p class="text-base-content text-opacity-80">

            </p>
            <div class="my-2">
              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/laravel-svgrepo-com.svg" width="17" alt="Imagem Laravel"
                  class="inline-block mr-0">
                Laravel
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/mysql-svgrepo-com.svg" width="18" alt="Imagem MySQL"
                  class="inline-block mr-0">
                MySQL
              </span>
              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/javascript-svgrepo-com.svg" width="18" alt="Imagem JavaScript"
                  class="inline-block mr-0">
                JavaScript
              </span>
              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/jquery-svgrepo-com.svg" width="18" alt="Imagem jQuery"
                  class="inline-block mr-0">
                jQuery
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/bootstrap-4.svg" width="18" alt="Imagem Bootstrap" class="inline-block mr-0">
                Bootstrap
              </span>
              <!---<span class="badge badge-accent mr-2 mb-2">Tailwind</span>--->
            </div>
            <div class="card-actions justify-start">
              <!-------<a href="#" class="btn btn-link text-primary p-0">Ver Demo</a>------->
              <a href="https://github.com/kelvinjunior77/sistema-de-gestao-escolar"
                class="btn btn-active text-base-content text-opacity-70 p-3" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Repositório
              </a>
            </div>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl project-card transform transition-transform duration-300 hover:scale-105">

          <figure class="bg-base-300 overflow-hidden cursor-pointer" @click="openModal('image_modal_laravue')">
            <img src="/src/assets/projetos/crud-laravue.png" alt="Preview do Projeto Gestão Escolar"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-100">
          </figure>


          <div class="card-body">
            <h3 class="card-title">Sistema de Gestão de Livros - LaraVue</h3>
            <p class="text-base-content text-opacity-80">
              O LaraVue CRUD é um projeto desenvolvido para demonstrar a integração poderosa entre Laravel (backend) e
              Vue 3 (frontend) utilizando Inertia.js como ponte.
            </p>
            <div class="my-2">
              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <!--- <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
                </svg>-->
                <img src="/src/assets/icon/laravel-svgrepo-com.svg" width="17" alt="Imagem Laravel"
                  class="inline-block mr-0">
                Laravel
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/mysql-svgrepo-com.svg" width="18" alt="Imagem MySQL"
                  class="inline-block mr-0">
                MySQL
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/vue-9-logo-svgrepo-com.svg" width="15" alt="Imagem Vue.js"
                  class="inline-block mr-0">
                Vue Js
              </span>


              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/tailwind-svgrepo-com.svg" width="22" alt="Imagem Tailwindcss"
                  class="inline-block mr-0">
                Tailwindcss
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/inertiajs-plain.svg" width="20" alt="Imagem Inertia.js"
                  class="inline-block mr-0">
                Inertia.js
              </span>

              <!---<span class="badge badge-accent mr-2 mb-2">Tailwind</span>--->
            </div>
            <div class="card-actions justify-start mt-0">
              <!-------<a href="#" class="btn btn-link text-primary p-0">Ver Demo</a>------->
              <a href="https://github.com/kelvinjunior77/laravue-crud"
                class="btn btn-active text-base-content text-opacity-70 p-3" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Repositório
              </a>
            </div>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl project-card transform transition-transform duration-300 hover:scale-105">

          <figure class="bg-base-300 overflow-hidden cursor-pointer" @click="openModal('image_modal_dicionario')">
            <img src="/src/assets/projetos/dicionario.png" alt="Preview do Dicionario Tecnico"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-100">
          </figure>


          <div class="card-body">
            <h3 class="card-title">Dicionário Tecnico</h3>
            <p class="text-base-content text-opacity-80">
              Um sistema de busca para palavras técnicas na área de Tecnologia da Informação (TI). Utilizando Vue js no
              frontend e consumindo API com Laravel.
            </p>
            <div class="my-2">

              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/laravel-svgrepo-com.svg" width="17" alt="Imagem Laravel"
                  class="inline-block mr-0">
                Laravel
              </span>

              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/mysql-svgrepo-com.svg" width="17" alt="Imagem MySQL"
                  class="inline-block mr-0">
                MySQL
              </span>


              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/vue-9-logo-svgrepo-com.svg" width="15" alt="Imagem Vue.js"
                  class="inline-block mr-0">
                Vue Js
              </span>

              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/bootstrap-4.svg" width="17" alt="Imagem Bootstrap" class="inline-block mr-0">
                Bootstrap
              </span>

              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/api-svgrepo-com.svg" width="20" alt="Imagem API" class="inline-block mr-0">
                API
              </span>

              <!---<span class="badge badge-accent mr-2 mb-2">Tailwind</span>--->
            </div>
            <div class="card-actions justify-start">
              <!-------<a href="#" class="btn btn-link text-primary p-0">Ver Demo</a>------->
              <a href="https://github.com/kelvinjunior77/dicionario-tecnico-vue"
                class="btn btn-active text-base-content text-opacity-70 p-3" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Repositório
              </a>
            </div>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl project-card transform transition-transform duration-300 hover:scale-105">

          <figure class="bg-base-300 overflow-hidden cursor-pointer" @click="openModal('image_modal_task_list')">
            <img src="/src/assets/projetos/tasklist.png" alt="Task List - Gestão de tarefa"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-100">
          </figure>


          <div class="card-body">
            <h3 class="card-title">Task List</h3>
            <p class="text-base-content text-opacity-80">
              Aplicativo simples para gerenciar tarefas diárias.
            </p>
            <div class="my-2">
              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/vue-9-logo-svgrepo-com.svg" width="16" alt="Imagem Vue.js"
                  class="inline-block mr-0">
                Vue Js
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/tailwind-svgrepo-com.svg" width="22" alt="Imagem Tailwindcss"
                  class="inline-block mr-0">
                Tailwindcss
              </span>


              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/pwa-svgrepo-com.svg" width="23" alt="Imagem Vue Js"
                  class="inline-block mr-0">
                PWA
              </span>
            </div>
            <div class="card-actions justify-start">

              <a href="https://task-liste.netlify.app" class="btn btn-active text-base-content text-opacity-70 p-3"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-check-check-icon lucide-check-check">
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg> Ver projeto
              </a>


              <a href="https://github.com/kelvinjunior77/task-list"
                class="btn btn-active text-base-content text-opacity-70 p-3" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Repositório
              </a>
            </div>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-xl project-card transform transition-transform duration-300 hover:scale-105">

          <figure class="bg-base-300 overflow-hidden cursor-pointer" @click="openModal('image_modal_soundhz')">
            <img src="/src/assets/projetos/soundhz.png" alt="Task List - Gestão de tarefa"
              class="w-full h-56 object-cover transition-transform duration-300 hover:scale-100">
          </figure>


          <div class="card-body">
            <h3 class="card-title">SoundHZ</h3>
            <p class="text-base-content text-opacity-80">
              Um gerador de frequências audíveis completo com visualizador de onda, máximos binários e exportação de
              áudio.
            </p>
            <div class="my-2">
              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/vue-9-logo-svgrepo-com.svg" width="16" alt="Imagem Vue.js"
                  class="inline-block mr-0">
                Vue Js
              </span>

              <span class="badge mb-2 font-bold outline-none border-0 border-white ">
                <img src="/src/assets/icon/tailwind-svgrepo-com.svg" width="22" alt="Imagem Tailwindcss"
                  class="inline-block mr-0">
                Tailwindcss
              </span>


              <span class="badge mr-0 mb-2 font-bold outline-none border-0 border-white">
                <img src="/src/assets/icon/pwa-svgrepo-com.svg" width="23" alt="Imagem Vue Js"
                  class="inline-block mr-0">
                PWA
              </span>
            </div>
            <div class="card-actions justify-start">

              <a href="https://soundhz.netlify.app/" class="btn btn-active text-base-content text-opacity-70 p-3"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-check-check-icon lucide-check-check">
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>Ver projeto
              </a>


              <a href="https://github.com/kelvinjunior77/gerar-sons-em-hz"
                class="btn btn-active text-base-content text-opacity-70 p-3" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Repositório
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>

    <Modal />

  </section>
</template>