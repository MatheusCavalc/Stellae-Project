<script setup lang="ts">
import { useRoute } from 'vue-router';

const teams = [
    { 'name': 'Valorant', 'link': 'valorant', 'image': 'https://cdn.icon-icons.com/icons2/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png' },
    { 'name': 'Valorant Academy', 'link': 'valorant-academy', 'image': 'https://cdn.icon-icons.com/icons2/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png' },
    { 'name': 'Rainbow Six Siege', 'link': 'r6siege', 'image': 'https://image.api.playstation.com/cdn/EP0001/CUSA01788_00/tCPL6bpXl4FhvK4mr19Rh5qJu4QJrfTK.png?w=440&thumb=false' },
]

const route = useRoute()

console.log(route.params.game)
</script>

<template>
    <div class="min-h-screen py-24 px-6 bg-teams text-white">
        <div>
            <div class="flex gap-10 pb-14">
                <p v-for="team in teams" :class="{ 'text-cyan-300': route.params.game == team.link }"
                    class="font-bold text-xl">{{ team.name }}</p>
            </div>

            <div>
                <p class="text-4xl font-bold mb-4 text-cyan-300">{{ route.params.game }}</p>

                <div class="flex gap-5">
                    <div>
                        <img src="https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>Nick</p>
                        <p>Nome</p>
                    </div>

                    <div>
                        <img src="https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>Nick</p>
                        <p>Nome</p>
                    </div>

                    <div>
                        <img src="https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>Nick</p>
                        <p>Nome</p>
                    </div>

                    <div>
                        <img src="https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>Nick</p>
                        <p>Nome</p>
                    </div>

                    <div>
                        <img src="https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                            class="h-80 w-56 object-cover rounded-md" lt="">
                        <p>Nick</p>
                        <p>Nome</p>
                    </div>
                </div>
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