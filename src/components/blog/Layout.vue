<script setup>
import NavbarBlogue from '../NavbarBlogue.vue';
import CardBlogue from '../cards/CardBlogue.vue';
import FooterBlogue from './FooterBlogue.vue';
</script>

<template>
    <div class="font-sans text-ink antialiased">
        <NavbarBlogue />

        <main class="pt-14">
            <article class="max-w-3xl mx-auto px-6 py-16 mt-10">

                <slot name="shre"></slot>

                <!-- Body - Texto -->

                <slot >
                    
                    <!--Post-->

                </slot>
               
          
            </article>
            
            <CardBlogue />
        </main>
    </div>

    <FooterBlogue />
</template>