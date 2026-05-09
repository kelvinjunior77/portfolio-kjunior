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
                O URL Amigável PHP é um mini framework desenvolvido para facilitar a criação de rotas amigáveis ​​em
                projetos PHP. Ele permite mapear URLs limpas e legíveis para funções, métodos ou arquivos, tornando o
                desenvolvimento de aplicações web mais organizado, seguro e fácil de manter.
            </p>

            <blockquote>
                "Este projeto tem como objetivo simplificar a manipulação de rotas, tornando possível criar URLs
                intuitivas sem a necessidade de servidores ou configurações avançadas de .htaccess."
            </blockquote>

            <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">
                Principais recursos
            </h2>
            <p>
            <ul class="list-disc list-inside mt-4">
                <li>Roteamento amigável para URLs limpas</li>
                <li>Suporte a intervalos sonoros nas rotas</li>
                <li>Fácil configuração e integração em qualquer projeto PHP</li>
                <li>Estrutura simples, ideal para projetos pequenos e médios</li>
            </ul>
            </p>

            <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">
                Como usar
            </h2>

            <ul class="list-disc list-inside mt-4">
                <li>Clonar este:</li>

                <span class="badge badge-ghost">git clone https://github.com/kelvinjunior77/url-amigavel-php.git</span>

                <li>Inclui os arquivos principais do framework no seu projeto.</li>
                <li>Certifique-se de que o servidor esteja configurado para redirecionar todas as requisições para o
                    arquivo
                    de entrada (exemplo: index.php).</li>
            </ul>


            <h2 class="font-serif font-bold text-2xl md:text-3xl text-ink mt-10 mb-4 leading-tight">Exemplo de uso</h2>

            <pre>
        <code class="language-php">
            switch ($url) {
            case 'home':
            include_once "view/pages/home.html";
            break;

            case 'videos':
            include_once "view/pages/multimedia/videos.php";
            break;

            case 'sobre':
            include_once "view/pages/sobre.php";
            break;

            default:
            include_once "view/pages/404.php";
            break;
            } </code>
    </pre>

        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-line">
            <a href="https://github.com/kelvinjunior77/url-amigavel-php" target="_blank" class="tag-pill">Acessar o
                repositorio</a>
        </div>

        <!-- Author card -->
        <div class="mt-12 p-6 rounded-2xl bg-white/60 border border-line flex gap-5 items-start">
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
