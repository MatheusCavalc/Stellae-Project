<script setup lang="ts">
import { useInfosStore } from '@/stores/infos'
import { useRoute } from 'vue-router';

const route = useRoute()

const teams = useInfosStore().teams
const line = useInfosStore().chooseTeam(route.params.game)[0]
</script>

<template>
    <Title>{{ line.game }} - Stellae</Title>

    <div class="min-h-screen py-24 px-6 bg-teams text-white">
        <div>
            <div class="flex gap-10 pb-8 lg:pb-14 overflow-x-auto hide-scrollbar">
                <p v-for="team in teams" :class="{ 'text-cyan-300': route.params.game == team.link }"
                    class="font-bold text-xl flex-shrink-0">{{ team.name }}</p>
            </div>

            <div>
                <p class="text-4xl lg:text-5xl font-bold mb-4 text-cyan-300">{{ line.game }}</p>

                <div class="grid grid-cols-2 lg:flex gap-5">
                    <div v-for="player in line.players" :key="player.name">
                        <img :src="player.image"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>{{ player.nick }}</p>
                        <p>{{ player.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="py-2 px-6 bg-cyan-300">
        <div class="flex justify-center gap-2 lg:gap-14">
            <div v-for="sponsor in line.sponsor" :key="sponsor.name">
                <img :src="sponsor.logo" class="max-w-48 h-14 lg:h-20 object-cover" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-teams {
    background-size: cover;
    background-position: center;
    width: 100%;
    background-image: linear-gradient(#000000d3, #000000bb), url('https://43417145.fs1.hubspotusercontent-na1.net/hub/43417145/hubfs/IMG_4278_(1).jpg?width=1200&length=1200&name=IMG_4278_(1).jpg');
    background-repeat: no-repeat;
}
</style>