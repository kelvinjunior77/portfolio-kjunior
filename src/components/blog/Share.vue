<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


// Recebe os dados do Post como props (opcional, se quiser partilhar links específicos)
const props = defineProps({
    title: { type: String, default: 'Confira este artigo!' },
    text: { type: String, default: 'Encontrei este conteúdo interessante.' },
    url: { type: String, default: window.location.href }
});

// Função de Partilha Nativa
const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: props.title,
                text: props.text,
                url: props.url,
            });
            console.log('Partilhado com sucesso!');
        } catch (err) {
            console.log('Erro ao partilhar:', err);
        }
    } else {
        // Caso o navegador não suporte Share API (ex: navegadores muito antigos)
        alert("Copiado para a área de transferência!");
        navigator.clipboard.writeText(props.url);
    }
};

const route = useRoute();
const postId = route.path;

// Chaves para o LocalStorage
const STORAGE_KEY_LIKED = `liked_${postId}`;
const STORAGE_KEY_COUNT = `likes_count_${postId}`;

const liked = ref(false);
const likesCount = ref(1); // Em um app real, isso viria do seu banco de dados

onMounted(() => {
    // 1. Carrega se o usuário já deu like
    const savedLiked = localStorage.getItem(STORAGE_KEY_LIKED);
    if (savedLiked === 'true') {
        liked.value = true;
    }

    // 2. Carrega o número de curtidas salvo
    const savedCount = localStorage.getItem(STORAGE_KEY_COUNT);
    if (savedCount !== null) {
        likesCount.value = parseInt(savedCount);
    } else {
        // Se é a primeira vez, salva o valor padrão (1200) no storage
        localStorage.setItem(STORAGE_KEY_COUNT, likesCount.value.toString());
    }
});

const toggleLike = () => {
    liked.value = !liked.value;

    if (liked.value) {
        likesCount.value++;
        localStorage.setItem(STORAGE_KEY_LIKED, 'true');
    } else {
        likesCount.value--;
        localStorage.removeItem(STORAGE_KEY_LIKED);
    }

    // Atualiza o número total no LocalStorage para não resetar
    localStorage.setItem(STORAGE_KEY_COUNT, likesCount.value.toString());
};
</script>

<template>
    <!-- Share row -->
    <div class="flex items-center gap-3 mb-12 animate-fade-up">


        <button @click="handleShare" class="share-btn badge badge-ghost active:scale-95 transition-transform">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Compartilhar
        </button>

        <button @click="toggleLike" class="share-btn badge badge-ghost transition-all duration-300"
            :class="{ 'text-red-500 border-red-200 bg-red-50 dark:bg-red-900/20': liked }">
            <svg width="13" height="13" viewBox="0 0 24 24" :fill="liked ? 'currentColor' : 'none'"
                stroke="currentColor" stroke-width="2">
                <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            {{ liked ? 'Curtido' : 'Curtir' }}
        </button>

        <div class="ml-auto text-xs text-slate-500 font-medium">
            {{ likesCount.toLocaleString() }} curtidas
        </div>

    </div>
</template>

<style scoped>
.share-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 9999px;
    border: 1px solid rgba(148, 163, 184, 0.3);
    transition: all 0.2s ease;
    cursor: pointer;
}

.share-btn:hover {
    background-color: rgba(248, 250, 252, 1);
}
</style>