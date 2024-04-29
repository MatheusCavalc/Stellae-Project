<script setup lang="ts">
import { useInfosStore } from '@/stores/infos'
import { useRoute } from 'vue-router';

const route = useRoute()

const teams = useInfosStore().teams
const line = useInfosStore().chooseTeam(route.params.game)[0]
</script>

<template>
    <NuxtLayout>
        <Title>{{ line.game }} - Stellae</Title>

        <div :class="{ 'bg-valorant': route.params.game == 'valorant', 'bg-r6': route.params.game == 'r6siege' }"
            class="min-h-screen py-28 px-6 text-white">
            <div>
                <div class="flex gap-10 pb-8 lg:pb-14 overflow-x-auto hide-scrollbar">
                    <p v-for="team in teams" :class="{ 'text-cyan-300': route.params.game == team.link }"
                        class="font-bold uppercase flex-shrink-0 hover:text-cyan-300">
                        <NuxtLink :to="`/teams/` + team.link">{{ team.name }}
                        </NuxtLink>
                    </p>
                </div>

                <div>
                    <p class="text-4xl lg:text-4xl uppercase font-bold mb-4 text-cyan-300">{{ line.game }}</p>

                    <div class="grid grid-cols-2 lg:flex gap-5 lg:overflow-x-auto">
                        <div v-for="player in line.players" :key="player.name"
                            class="group cursor-pointer flex-shrink-0">
                            <div class="relative">
                                <img :src="player.image" class="h-80 w-48 object-cover rounded-md" :alt="player.nick">

                                <div
                                    class="absolute bottom-0 w-48 h-80 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-cyan-300 transition-all duration-500">
                                </div>
                            </div>
                            <p class="font-bold uppercase">{{ player.nick }}</p>
                            <p class="text-secondary uppercase">{{ player.name }}</p>
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
    </NuxtLayout>
</template>

<style scoped>
.bg-valorant {
    background-size: cover;
    background-position: center;
    width: 100%;
    background-image: linear-gradient(#000000d3, #000000bb), url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc655d62fc92e4acd/649bdd9094be10f2698941ed/071123_Val_EP7_China_CG_Banner.jpg?auto=webp&disable=upscale&height=549');
    background-repeat: no-repeat;
}

.bg-r6 {
    background-size: cover;
    background-position: center;
    width: 100%;
    background-image: linear-gradient(#000000d3, #000000bb), url('https://s2-ge.glbimg.com/Mn4MpbfOftUzZYusjMjY6ucisp4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/b/d/MsAo0RQq25hzLuK95lew/r6-thumb.jpg');
    background-repeat: no-repeat;
}
</style>