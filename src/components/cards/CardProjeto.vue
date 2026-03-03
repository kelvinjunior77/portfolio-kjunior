<template>
    <div v-for="projeto in dados" :key="projeto.id" class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold mb-2">{{ projeto.titulo }}</h3>
        <p class="text-gray-700">{{ projeto.desc }}</p>
        <div class="mt-4">
            <a :href="projeto.ver_post" class="text-blue-500 hover:underline mr-4">Ver Post</a>
            <a :href="projeto.ver_codigo" class="text-blue-500 hover:underline">Ver Código</a>
        </div>
        <div class="mt-4">
            <img :src="projeto.imagem" alt="Imagem do Projeto" class="w-full h-auto rounded">
        </div>

        <div class="mt-4">
            <h4 class="text-lg font-semibold mb-2">Tecnologias Utilizadas:</h4>
            <ul class="list-disc list-inside">
                <li v-for="(tecnologia, index) in projeto.tecnologias" :key="tecnologia">
                    <span class="mr-2">
                        <img :src="projeto.icones[index]" alt="Icone Tecnologia" class="w-5 h-5 inline-block">
                    </span>
                    {{ tecnologia }}</li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

var dados = ref([

    {
        'id': 1,
        'titulo': 'Gestão de Projetos',
        'imagem': 'src/assets/projetos/gestao-projetos.png',

        'desc': 'Sistema completo para gerenciamento de projetos, tarefas e usuários, desenvolvido com Laravel, Vue.js e Inertia.js. Oferece uma interface moderna e reativa para facilitar o acompanhamento e a organização de equipes e atividades.',

        //'ver_post': 'https://ver-post.com/teste1',
        'ver_codigo': 'https://github.com/kelvinjunior77/gestao-de-projetos',

        'tecnologias': [
            'Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Inertia.js', 'DaisyUI'
        ], 
        'icones': [
            'src/assets/icon/laravel-svgrepo-com.svg',
            'src/assets/icon/vue.svg',
            'src/assets/icon/mysql-svgrepo-com.svg',
            'src/assets/icon/tailwind-svgrepo-com.svg',
            'src/assets/icon/inertiajs-plain.svg',
            'src/assets/icon/daisyui-icon.svg'
        ]
    }

])

</script>