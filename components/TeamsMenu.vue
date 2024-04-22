<script setup>
import { useInfosStore } from '@/stores/infos'

const teams = useInfosStore().teams
</script>

<template>
    <div class="mt-0 border-gray-200 shadow-sm bg-gradient-to-br from-black to-gray-950 border-y ">
        <div class="grid max-w-screen-xl px-4 py-4 mx-auto grid-cols-2 lg:grid-cols-7 gap-2 md:px-6 text-white">
            <div v-for="team in teams" :key="team.name">
                <NuxtLink :to="`/teams/` + team.link">
                    <p class="uppercase text-center">{{ team.name }}</p>
                    <div class="flex justify-center">
                        <img class="h-24"
                            :src="team.image"
                            alt="" srcset="">
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>