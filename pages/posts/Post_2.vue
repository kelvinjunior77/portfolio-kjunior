<script setup>
import Layout from '../../src/components/blog/Layout.vue';
import Share from '../../src/components/blog/Share.vue';
import { onMounted, nextTick } from 'vue';

onMounted(async () => {

    await nextTick();


    if (window.Prism) {
        window.Prism.highlightAll();
    }
});
</script>

<template>
    <Layout>

        <template #shre>
            <Share title="Título do Artigo - Kelvin Junior" text="Estou a ler sobre IA no blogue do Kelvin." />
        </template>

        <div class="prose-body">

            <p class="drop-cap">
                Você já teve erros ao utilizar rotas no <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue js</a> ?

            <p>Em aplicações modernas que utilizam <a href="https://laravel.com/" class="text-red-600 font-bold" target="_blank" rel="noopener noreferrer">Laravel</a> no backend e <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue.js</a> no frontend, especialmente quando
                integradas com Inertia.js, é comum surgirem erros de rotas no frontend. Esses erros geralmente não
                indicam um
                problema
                no <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue Js</a> em si, mas sim uma falha de comunicação entre o backend e o frontend.</p>

            <p>No Laravel, as rotas são definidas no backend usando nomes,
                porém, no <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue.js</a> essas rotas não existem automaticamente.</p>

            <p>Se tentares usar rota no <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue js</a> pelo nome declarado no backend. Não sera possivel.</p>
            <p>Isso acontece porque:</p>

            <ul class="list-disc list-inside text-justify">
                <li>O <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue Js</a> não conhece as rotas do <a href="https://laravel.com/" class="text-red-600 font-bold" target="_blank" rel="noopener noreferrer">Laravel</a>.</li>
                <li>O JavaScript roda no navegador, fora do contexto do backend.</li>
                <li>Sem um intermediário, o frontend não tem acesso aos nomes de rotas.</li>
            </ul>

            <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">
                O papel do Ziggy.js
            </h2>
            <p>O Ziggy.js resolve exatamente esse problema.</p>

            É uma biblioteca que:
            <ul class="list-disc list-inside text-justify">
                <li>Exporta todas as rotas do <a href="https://laravel.com/" class="text-red-600 font-bold" target="_blank" rel="noopener noreferrer">Laravel</a> para o JavaScript.</li>
                <li>Permite usar os nomes das rotas no <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue.js</a>.</li>
                <li>Garante que frontend e backend usem a mesma fonte de verdade.</li>
            </ul>

            <img src="/src/assets/ziggy.png" alt="" class="w-full h-auto rounded-lg mb-6 object-cover" />

            <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">
                O papel do Inertia.js
            </h2>
            <p>O <a href="https://inertiajs.com/" class="text-blue-500 font-bold" target="_blank" rel="noopener noreferrer">Inertia.js</a> é o responsável por unir <a href="https://laravel.com/" class="text-red-600 font-bold" target="_blank" rel="noopener noreferrer">Laravel</a> e <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue.js</a>
             sem a necessidade de criar uma API REST
                tradicional.
                Ele funciona como uma ponte inteligente, permitindo que:
                O <a href="https://laravel.com/" class="text-red-600 font-bold" target="_blank" rel="noopener noreferrer">Laravel</a> continue sendo responsável pelas rotas.
                O <a href="https://vuejs.org/" class="text-emerald-500 font-bold" target="_blank" rel="noopener noreferrer">Vue.js</a> seja responsável pelas páginas.
            Os dados sejam enviados como props. </p>

            <img src="/src/assets/ziggy-2.png" class="w-full h-auto rounded-lg mb-6 object-cover"alt="">
            </p>

            <p>
                <a class="badge badge-ghost" href="https://laracasts.com/discuss/channels/inertia/laravel-inertia-js-vue-3-ziggy-routes">Para mais informação sobre a instalação e como usar <--</a>
            </p>
        </div>

        <div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-line">
            <span class="badge badge-ghost">Veja alguns projetos usando Ziggy.js </span>
            <a href="https://github.com/kelvinjunior77/gestao-de-projetos" target="_blank" class="tag-pill">Gestão de projetos</a>
            <a href="https://github.com/kelvinjunior77/laravue-crud" target="_blank" class="tag-pill">Laravue CRUD</a>
            <span>Ou podes ir diretamente no portifolio nos projetos.</span>
        </div>
        

        <!-- Author card -->
        <div class="mt-12 p-6 rounded-2xl border border-line flex gap-5 items-start">
            <div
                class="author-avatar w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold font-serif">
                KJ</div>
            <div>
                <p class="font-serif font-bold text-lg text-ink">Kelvin Junior</p>
                <p class="text-muted text-sm mt-1 leading-relaxed">
                    Desenvolvedor Web <em>LaraVue Coding </em>.
                </p>
                <a href="https://github.com/kelvinjunior77" target="_blank"
                    class="inline-block mt-3 text-accent text-xs font-medium uppercase tracking-widest hover:underline">
                    GitHub →</a>
            </div>
        </div>
    </Layout>
</template>
