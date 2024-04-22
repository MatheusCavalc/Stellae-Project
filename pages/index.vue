<script setup>
import { useProductsStore } from '@/stores/products';
import { useInfosStore } from '@/stores/infos';

const products = useProductsStore().products
const sponsors = useInfosStore().sponsors
</script>

<template>
    <NuxtLayout>
        <Title>Stellae Gaming</Title>
        <div class="min-h-screen image-home bg-center bg-cover"></div>

        <div class="px-4 py-10">
            <p class="text-left lg:text-center text-3xl italic lg:text-4xl font-bold mb-8">
                Nossos produtos
            </p>

            <div class="gap-5 flex lg:justify-center lg:gap-10 mx-auto overflow-x-auto hide-scrollbar">
                <div v-for="product in products" class="flex-shrink-0">
                    <a :href="product.link" target="_blank">
                        <img :src="product.image" class="h-80 lg:w-full object-cover" alt="" srcset="">
                        <p class="font-bold uppercase">{{ product.name }}</p>
                        <p class="font-bold uppercase">R${{ product.price }}</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="py-10 px-6 bg-cyan-300">
            <div class="flex justify-center gap-2 lg:gap-14">
                <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" target="_blank">
                    <div class="hover:scale-110 transition duration-300">
                        <img :src="sponsor.logo" class="max-w-48 h-14 lg:h-20 object-cover" alt="" srcset="">
                    </div>
                </a>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.image-home {
    width: 100%;
    background-image: url('https://static.valorantzone.gg/news/2024/02/06105545/stellae-gaming.jpg');
}
</style>