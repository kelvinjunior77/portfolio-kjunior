<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-9xl font-bold text-accent ">404</h1>
    <p class="text-2xl font-medium mt-4 text-ink">Ops! Página não encontrada.</p>
    <p class="text-muted mt-2 mb-8">Parece que o caminho que você tentou acessar não existe mais ou foi movido.</p>
    <span class="loading loading-dots loading-xl"></span>

    
    <router-link to="/" class="btn btn-primary rounded-full px-8">
      Voltar para o Início
    </router-link>
  </div>
</template>