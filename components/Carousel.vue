<script setup>
import { ref, onMounted } from 'vue';

const currentSlide = ref(1);
const timeDuration = 1000;

function nextSlide() {
    if (currentSlide.value === 2) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value++;
}

function prevSlide() {
    if (currentSlide.value === 1) {
        currentSlide.value = 2;
        return;
    }
    currentSlide.value--;
}

function autoPlay() {
    setInterval(() => {
        nextSlide();
    }, timeDuration);
}

onMounted(() => {
    //autoPlay();
});

</script>

<template>
    <div class="bg-black h-[720px] lg:h-screen relative">
        <div class="flex overflow-x-hidden">
            <!-- Slide 1 -->
            <Transition>
                <div v-if="currentSlide == 1" class="w-full bg-black ease-in-out h-[720px] lg:h-screen flex-shrink-0">
                    <div
                        class="image-home bg-center bg-cover h-full grid grid-cols-1 gap-4 items-end pb-28 lg:pb-0 lg:place-items-center">

                        <div class="">
                            <p class="text-3xl mx-5 lg:mx-0 text-cyan-300 italic lg:font-bold md:text-6xl text-center">
                                #BeStellae
                            </p>
                            <LinksHome />
                        </div>

                    </div>
                </div>
            </Transition>

            <Transition>
                <!-- Slide 2 -->
                <div v-if="currentSlide == 2" class="w-full bg-black ease-in-out h-[720px] lg:h-screen flex-shrink-0">
                    <div
                        class="image-jersey bg-center bg-cover h-full grid lg:grid-cols-3 gap-4 items-end pb-28 lg:pb-0 lg:place-items-center">
                        <div class="hidden lg:block"></div>
                        <div class="">
                            <p
                                class="text-3xl mx-5 lg:mx-0 italic font-bold md:text-6xl uppercase text-cyan-300 text-center">
                                Nosso novo uniforme
                            </p>
                            <p class="text-white text-center text-sm lg:text-base text-secondary mt-4">Confira nossos produtos e se renda
                                a
                                ser Stellae</p>

                            <div class="flex justify-center mt-5 lg:mt-7 text-secondary">
                                <a href="https://rasquigg.com.br/equipes/stellaegaming" target="_blank">
                                    <button
                                        class="px-14 py-3 uppercase mr-1 text-sm font-medium text-black bg-gradient-to-r from-white to-cyan-300 text-center lg:border lg:border-black lg:px-14 lg:mr-0">Confira
                                        Mais</button>
                                </a>
                            </div>
                        </div>
                        <div class="hidden lg:block"></div>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-8 lg:bottom-32 left-1/2">
            <button type="button" @click="currentSlide = 1"
                :class="{ 'bg-cyan-300': currentSlide === 1, 'bg-white': currentSlide !== 1 }"
                class="w-2.5 h-2.5 border-2 rounded-full lg:border-none" aria-current="true"
                aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" @click="currentSlide = 2"
                :class="{ 'bg-cyan-300': currentSlide === 2, 'bg-white': currentSlide !== 2 }"
                class="w-2.5 h-2.5 border-2 rounded-full lg:border-none" aria-current="false"
                aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div>

        <div
            class="absolute hidden top-28 left-72 z-0 lg:flex items-center justify-center invisible h-full px-4 md:visible group focus:outline-none">
            <button @click="prevSlide()" class="rounded-full cursor-pointer">
                <span class="inline-flex items-center justify-center w-10 h-9 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </span>
            </button>
        </div>

        <div
            class="absolute top-28 right-72 z-0 hidden lg:flex items-center justify-center invisible h-full px-4 md:visible group focus:outline-none">
            <button @click="nextSlide()" class="rounded-full cursor-pointer">
                <span class="inline-flex items-center justify-center w-10 h-9 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </button>
        </div>
    </div>

</template>

<style scoped>
.image-home {
    width: 100%;
    background-image: linear-gradient(#00000062, #00000062), url('https://static.valorantzone.gg/news/2024/02/06105545/stellae-gaming.jpg');
}

.image-jersey {
    width: 100%;
    background-image: linear-gradient(#00000062, #00000062), url('https://static.valorantzone.gg/news/2024/02/14224426/Stellae-2024.jpg');
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>