<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

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

onMounted(() => {
    getVideos()
})

</script>

<template>
    <section class=" py-8">
        <p class="text-2xl lg:text-3xl px-5 lg:px-6 font-bold italic lg:not-italic">Conheca a Stellae Gaming</p>

        <div class="">
            <div>
                <!--
                    <div class="mt-3 flex justify-center mx-40">
                        <div v-if="lastVideo">
                            <div class="border-2 border-red-600">
                                <iframe :src="lastVideo" class="w-72 h-44 lg:w-[800px] lg:h-[450px]" frameborder="0"
                                allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                -->

                <div class="mt-8">
                    <ul class="flex lg:grid grid-cols-3 gap-3 lg:gap-6 px-4 lg:px-6 w-full overflow-x-auto overflow-y-hidden">
                        <li v-for="video in videos" :key="video.id" class="lg:mb-0 flex-shrink-0">
                            <a @click="getLastVideo(video.id.videoId)" class="cursor-pointer lg:block gap-3">
                                <div class="flex justify-center">
                                    <img :src="video.snippet.thumbnails.high.url" class="h-56 w-[370px] lg:h-60 lg:w-full object-cover border border-cyan-300" alt="">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>