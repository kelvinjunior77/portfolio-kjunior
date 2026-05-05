<script setup>
import ThemeToggle from '../src/components/ThemeToggle.vue';
import NavbarBlogue from '../src/components/NavbarBlogue.vue';

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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Card 1 -->
            <article class="related-card cursor-pointer group">
              <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=70" alt=""
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost">Cultura</span>
              <router-link :to="{ name: 'Post_1' }">
                <h4 class="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                  Quando a máquina escreve: o que acontece com a autoria?
                </h4>
              </router-link>
              <p class="text-muted text-xs mt-2">8 min · 14 Abr 2026</p>
            </article>

            <!-- Card 2 -->
            <article class="related-card cursor-pointer group">
              <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=70" alt=""
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost">Ciência</span>
              <h4 class="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                Os modelos que aprendem a mentir — e o que fazer a respeito
              </h4>
              <p class="text-muted text-xs mt-2">11 min · 7 Abr 2026</p>
            </article>

            <!-- Card 3 -->
            <article class="related-card cursor-pointer group">
              <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70" alt=""
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost">Tecnologia</span>
              <h4 class="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                Edge computing e IA: o processamento que vai para a borda
              </h4>
              <p class="text-muted text-xs mt-2">6 min · 1 Abr 2026</p>
            </article>

          </div>
        </div>

      </section>
    </main>
  </div>

  <footer class="border-line h-44 py-10 px-6 border-t-1 border-base-200 bg-base-200 mt-9">
    <br> <br>
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="font-serif font-black text-lg">MyBlogue<span class="text-accent">.</span></p>
      <p class="text-muted text-xs">© 2026 - {{ ano }}. Todos os direitos reservados.</p>
      <div class="flex gap-6 text-xs text-muted">
        <a href="#" class="hover:text-accent transition-colors text-sm">Kelvin Junior</a>
        <a href="https://github.com/kelvinjunior77" target="_blank" class="hover:text-accent transition-colors">

          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github"
            viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>

        </a>

      </div>

    </div>
  </footer>

</template>

<style scoped>
.permanent-marker {
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
}

blockquote {
  border-left: 3px solid #c84b31;
  padding-left: 1.5rem;
  margin: 2.5rem 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.3rem;
  color: #2a2520;
  line-height: 1.6;
}

.tag-pill {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 999px;
  transition: all 0.2s;
}

.tag-pill :hover {
  background: #c84b31;
  border: 1px solid #c84b31;
  color: #f5f0e8;
}

.tag-pill:hover {
  background: #c84b31;
  color: #f5f0e8;
}
</style>