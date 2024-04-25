<script setup>
import PlayIcon from './Icons/PlayIcon.vue'
import CloseIcon from './Icons/CloseIcon.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const openModalVideo = ref(false)

const apiKey = 'AIzaSyDmexxDO7bWHamo5vB4FrUo2DVYBN6_2iY'; // Substitua pelo seu próprio apiKey
const channelId = 'UCHSQWWdQFyA_sGOWE98cZMg'; // Substitua pelo ID do canal que você deseja exibir
const videos = ref([]);
const lastVideo = ref('')

const getVideos = () => {
    axios
        .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: apiKey,
                channelId: channelId,
                order: 'date',
                part: 'snippet',
                maxResults: 5,
            },
        })
        .then(response => {
            videos.value = response.data.items;
            getLastVideo(videos.value[0].id.videoId)

            console.log(videos.value);
        })
        .catch(error => {
            console.error('Erro ao obter vídeos do YouTube:', error);
        });
}

const getLastVideo = (videoId) => {
    lastVideo.value = 'https://www.youtube.com/embed/' + videoId
}

const closeModalVideo = () => {
    openModalVideo.value = false
    lastVideo.value = ''
}

onMounted(() => {
    getVideos()
})

</script>

<template>
    <section class="py-8">
        <p class="text-2xl lg:text-3xl px-5 lg:px-6 font-bold italic lg:not-italic">Conheca a Stellae Gaming</p>

        <div class="mt-8">
            <ul class="flex lg:grid grid-cols-3 gap-3 lg:gap-6 px-4 lg:px-6 w-full overflow-x-auto overflow-y-hidden hide-scrollbar">
                <li @click="openModalVideo = true" v-for="video in videos" :key="video.id"
                    class="lg:mb-0 flex-shrink-0">
                    <a @click="getLastVideo(video.id.videoId)" class="cursor-pointer lg:block gap-3">
                        <div class="flex justify-center relative group">
                            <img :src="video.snippet.thumbnails.high.url"
                                class="h-56 w-[370px] lg:h-60 lg:w-full object-cover border border-cyan-300" alt="">

                            <div class="absolute top-24 z-20 text-white rounded-full p-4 bg-cyan-300 group-hover:scale-125 transition duration-200">
                                <PlayIcon />
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <Transition>
            <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
                v-show="openModalVideo">
                <div class="relative w-4/5 h-44 lg:w-[800px] lg:h-[450px]">
                    <div class="">
                        <div class="mt-3 flex justify-center mx-40">
                            <div v-if="lastVideo">
                                <div class="border-2 border-cyan-600 bg-black">
                                    <iframe :src="lastVideo" class="w-96 h-56 lg:w-[800px] lg:h-[450px]" frameborder="0"
                                        allowfullscreen></iframe>
                                </div>
                            </div>

                            <div class="absolute -top-6 lg:-top-3 -right-6 lg:-right-10">
                                <p class="ml-3">
                                    <button class="text-white" @click="closeModalVideo">
                                        <CloseIcon />
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <div v-show="openModalVideo" class="fixed inset-0 z-40 bg-black opacity-75"></div>
    </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>