<template>

  <div class="font-sans text-ink antialiased">

    <main class="pt-14">

      <!-- ──── ARTICLE BODY ───── -->
      <article class="max-w-3xl mx-auto px-6 py-16">

        <!-- Body -->
        <div class="prose-body">

          <p class="drop-cap">
            Raramente uma tecnologia captura a imaginação humana de forma tão intensa e simultânea quanto a inteligência
            artificial o fez nos últimos anos. De laboratórios acadêmicos obscuros, ela migrou para o centro das
            conversas sobre trabalho, criatividade, poder e o que significa ser humano num mundo cada vez mais mediado
            por algoritmos.
          </p>

          <blockquote>
            "Não precisamos escolher entre progresso e responsabilidade. A questão real é: quem decide o que conta como
            progresso?"
          </blockquote>

          <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">O que mudou nos
            últimos dois anos</h2>

          <hr class="ornament" />

          <!-- Highlight box -->
          <div class="bg-ink text-cream rounded-2xl p-8 my-10">
            <p class="font-serif text-lg font-semibold leading-relaxed mb-0">
              "Sistemas de IA tomam decisões sobre crédito, saúde e liberdade. Quando erram, o ônus raramente recai
              sobre seus criadores — recai sobre as pessoas que menos podem arcar com as consequências."
            </p>
            <p class="text-cream/50 text-xs mt-4 font-medium uppercase tracking-widest">— Relatório AI Now Institute,
              2025</p>
          </div>

          <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">Por onde começa a
            responsabilidade</h2>

          <p>
            Regulações como o AI Act europeu representam um primeiro passo importante, ainda que imperfeito. Ao
            categorizar sistemas por nível de risco e impor requisitos de transparência e auditabilidade, a legislação
            cria ao menos um vocabulário comum para a discussão. O problema é que regulação reativa sempre corre atrás
            de uma tecnologia que se move mais rápido.
          </p>

        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-line">
          <span class="tag-pill">IA</span>
          <span class="tag-pill">Tecnologia</span>
          <span class="tag-pill">Ética</span>
          <span class="tag-pill">Futuro</span>
          <span class="tag-pill">Regulação</span>
        </div>

        <!-- Author card -->
        <div class="mt-12 p-6 rounded-2xl bg-white/60 border border-line flex gap-5 items-start">
          <div
            class="author-avatar w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold font-serif">
            MS</div>
          <div>
            <p class="font-serif font-bold text-lg text-ink">Marina Sousa</p>
            <p class="text-muted text-sm mt-1 leading-relaxed">
              Jornalista especializada em tecnologia e sociedade. Escreve sobre os impactos humanos da computação desde
              2018. Autora do livro <em>Código e Consequência</em>.
            </p>
            <a href="#"
              class="inline-block mt-3 text-accent text-xs font-medium uppercase tracking-widest hover:underline">Ver
              todos os artigos →</a>
          </div>
        </div>

      </article>

      <!-- ───── RELATED POSTS ───── -->
      <section class="border-t border-line bg-white/40 py-16">
        <div class="max-w-5xl mx-auto px-6">
          <h3 class="font-serif font-bold text-2xl text-ink mb-10">Leia também</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Card 1 -->
            <article class="related-card cursor-pointer group">
              <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=70" alt=""
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span class="tag-pill text-[0.65rem] mb-2 inline-block">Cultura</span>
              <h4 class="font-serif font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                Quando a máquina escreve: o que acontece com a autoria?
              </h4>
              <p class="text-muted text-xs mt-2">8 min · 14 Abr 2026</p>
            </article>

            <!-- Card 2 -->
            <article class="related-card cursor-pointer group">
              <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=70" alt=""
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span class="tag-pill text-[0.65rem] mb-2 inline-block">Ciência</span>
              <h4 class="font-serif font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
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
              <span class="tag-pill text-[0.65rem] mb-2 inline-block">Tecnologia</span>
              <h4 class="font-serif font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                Edge computing e IA: o processamento que vai para a borda
              </h4>
              <p class="text-muted text-xs mt-2">6 min · 1 Abr 2026</p>
            </article>

          </div>
        </div>
      </section>



    </main>

    
  </div>



  <router-link :to="{ name: 'Home' }" class="btn btn-outline btn-success mt-8">
    ← Voltar para o Portfólio
  </router-link>


</template>

<script setup>

</script>

<style scoped>
body { background-color: #f5f0e8; }

    .hero-image {
      background-image: url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80');
      background-size: cover;
      background-position: center;
    }

    .drop-cap::first-letter {
      font-family: 'Playfair Display', serif;
      font-size: 5.5rem;
      font-weight: 900;
      float: left;
      line-height: 0.78;
      margin-right: 0.12em;
      margin-top: 0.08em;
      color: #c84b31;
    }


    .prose-body p {
      line-height: 1.85;
      font-size: 1.0625rem;
      /* color: #2a2520; */
      margin-bottom: 1.5rem;
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
      border: 1px solid #c84b31;
      color: #c84b31;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border-radius: 999px;
      transition: all 0.2s;
    }
    .tag-pill:hover { background: #c84b31; color: #f5f0e8; }

    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 3px;
      background: #c84b31;
      width: 0%;
      z-index: 100;
      transition: width 0.1s linear;
    }

    hr.ornament {
      border: none;
      text-align: center;
      margin: 2.5rem 0;
      color: #c84b31;
      font-size: 1.3rem;
      letter-spacing: 0.5em;
    }
    hr.ornament::before { content: '✦  ✦  ✦'; }

    .author-avatar {
      background: linear-gradient(135deg, #c84b31, #f0a070);
    }

    .share-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 1rem;
      border: 1px solid #e0d9ce;
      border-radius: 999px;
      font-size: 0.78rem;
      color: #7a7570;
      font-weight: 500;
      transition: all 0.2s;
      cursor: pointer;
      background: transparent;
    }
    .share-btn:hover { border-color: #c84b31; color: #c84b31; }

    .related-card {
      transition: transform 0.25s ease;
    }
    .related-card:hover { transform: translateY(-4px); }

    .nav-link {
      position: relative;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #2a2520;
      font-weight: 500;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 1px;
      background: #c84b31;
      transition: width 0.25s;
    }
    .nav-link:hover::after { width: 100%; }
</style>