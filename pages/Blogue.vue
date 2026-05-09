<script setup>
import CardBlogue from '../src/components/cards/CardBlogue.vue';
import NavbarBlogue from '../src/components/NavbarBlogue.vue';
import FooterBlogue from '../src/components/blog/FooterBlogue.vue';

const ano = new Date().getFullYear();

</script>

<template>

  <div class="font-sans text-ink">

    <NavbarBlogue />

    <main class="pt-14">

      <!-- ───── RELATED POSTS ───── -->
      <section class="bg-white/5 py-16">
        <div class="max-w-5xl mx-auto px-6 mt-10">
          <!--  <h3 class="font-serif font-bold text-2xl text-ink mb-10">
            <router-link :to="{ name: 'Home' }" class="btn btn-outline btn-success">
              ← Voltar para o Portfólio
            </router-link>
          </h3>-->
         
          <CardBlogue />
        </div>

      </section>

    </main>
  </div>

 <FooterBlogue />

</template>

<style scoped>



</style>