<script setup>
import ThemeToggle from './ThemeToggle.vue';

</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md shadow-2xl">
        <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <router-link :to="{ name: 'Blogue' }"
                class="font-serif font-black text-xl tracking-tight text-success text-shadow-2xs permanent-marker">
                MyBlogue<span class="text-success text-shadow-2xs">.</span>
            </router-link>

            <div class="navbar-end ">

                <ThemeToggle class="mr-0" />

                <router-link to="/"
                    class="ml-4 text-xs uppercase tracking-widest font-medium border border-ink px-4 py-1.5 rounded-full hover:bg-ink hover:text-cream transition-all duration-200">
                    KJ - Dev
                </router-link>

                <div class="dropdown dropdown-end ml-0">
                    <label tabindex="0" class="btn btn-ghost btn-circle" aria-label="Mudar idioma">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-globe">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>
                    </label>

                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        <li><a href="#" class="active">🇧🇷 Português (PT)</a></li>
                        <li><a href="#">🇺🇸 English (EN)</a></li>
                        <li><a href="#">🇫🇷 Français (FR)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.permanent-marker {
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>