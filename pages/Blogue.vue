<template>
  <div class="blog-construction-page py-20 bg-base-100 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6 max-w-2xl text-center">
      
      <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto mb-6 text-success animate-bounce-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M16 11l-4 4-4-4" />
          <path d="M12 15V9" />
      </svg>
      
      <div class="p-8 bg-base-200 rounded-xl shadow-xl border-t-4 border-success">
          <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-base-content leading-tight">
            Blogue em Reconstrução
          </h1>
          <p class="text-lg text-base-content/80 mb-6">
            Esta página está a ser totalmente reconstruída para trazer conteúdo de alta qualidade e um novo design.
          </p>
          <p class="text-xl font-semibold text-success">
            Ficará disponível em breve!
          </p>
      </div>
      
      <router-link :to="{ name: 'Home' }" class="btn btn-outline btn-success mt-8">
          ← Voltar para o Portfólio
      </router-link>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>