<template>
    <section class="">
        <div class="max-w-5xl mx-auto px-6  mt-10">
           <!--<h3 class="font-serif font-bold text-2xl text-ink mb-0">
                Leia também
            </h3> bg-white/5 ---> 
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <!-- Card 1 -->
                <article class="related-card cursor-pointer group">
                    <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70" alt=""
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost">Tecnologia</span>
                    <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost ml-1">PHP</span>
                    <router-link :to="{ name: 'Post_1' }" >
                        <h4 class="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                            URL Amigavel - Sistema de Rotas com PHP — Miniframework simples.
                        </h4>
                    </router-link>
                    <p class="text-muted text-xs mt-2">9 Maio 2026</p>
                </article>

                <!-- Card 2 -->
                <article class="related-card cursor-pointer group">
                    <div class="rounded-xl overflow-hidden mb-4 aspect-[3/2] bg-gray-200">
                        <img src="/src/assets/ziggy.jpg" alt=""
                            class="w-100 h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost">PHP</span>
                    <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost ml-1">Laravel</span>
                    <span class="tag-pill text-[0.65rem] mb-2 inline-block badge-ghost ml-1">Vue Js</span>
                   
                    <router-link :to="{ name: 'Post_2' }">
                        <h4 class="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors">
                            Erros de Rotas no Frontend com Vue Js. Usando Inertia - Laravel
                        </h4>
                    </router-link>
                    <p class="text-muted text-xs mt-2">13 Maio 2026</p>
                </article>

                <!-- Card 3 
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
                </article>-->

            </div>
        </div>

    </section>

</template>
