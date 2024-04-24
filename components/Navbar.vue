<script setup>
import MenuIcon from '@/components/Icons/MenuIcon.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menu = ref(false)
const teamsMenu = ref(false)

const isHidden = ref(false);
let lastScrollTop = 0;

const isNavbarOpaque = ref(false);

const handleScroll = () => {
    const scrollThreshold = 100;
    isNavbarOpaque.value = window.scrollY > scrollThreshold;

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scroll para baixo
        isHidden.value = true;
    } else {
        // Scroll para cima
        isHidden.value = false;
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav :class="{ 'border-b border-b-black bg-black': isNavbarOpaque, 'lg:-translate-y-full lg:ease-in': isHidden, 'lg:-translate-y-0 lg:ease-out': !isHidden }"
        class="fixed top-0 z-30 w-full transition duration-700 ease-in-out">
        <div class="flex flex-wrap items-center justify-between max-w-screen-2xl px-1 lg:px-4 py-3 lg:py-0 mx-auto">
            <NuxtLink to="/"
                class="flex items-center gap-1 transition duration-700 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <span
                    class="self-center text-xl font-semibold lg:text-2xl whitespace-nowrap traced-black text-secondary">Stellae</span>
            </NuxtLink>
            <div class="flex lg:order-2">
                <a href="https://www.instagram.com/store.lostlight/" target="_blank">
                    <Links />
                </a>
                <button @click="menu = !menu"
                    :class="{ 'line-color-black': isNavbarOpaque, 'line-color-white': !isNavbarOpaque, 'opened': menu }"
                    class="inline-flex items-center justify-center w-10 h-10 p-1 text-sm rounded-lg lg:hidden transition duration-700 ease-in-out">
                    <MenuIcon />
                </button>
            </div>
            <div :class="{ 'lg:block': menu, 'hidden lg:block': !menu }" class="w-full lg:w-auto lg:order-1"
                id="navbar-default">
                <ul :class="{ 'bg-black': isNavbarOpaque, '': !isNavbarOpaque }"
                    class="flex flex-col transition duration-700 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 p-4 mt-4 font-medium border border-gray-100 rounded-lg lg:p-0 lg:flex-row lg:space-x-14 lg:mt-0 lg:border-0 lg:bg-transparent">
                    <li>
                        <button class="block py-2 pl-3 pr-4 rounded lg:border-0 lg:py-5 traced-black">
                            Shop
                        </button>
                    </li>

                    <li @click="teamsMenu = !teamsMenu" @mouseover="teamsMenu = true" @mouseleave="teamsMenu = false">
                        <button class="block py-2 pl-3 pr-4 rounded lg:border-0 lg:py-5 traced-black">
                            Teams
                        </button>
                    </li>

                    <li>
                        <button class="block py-2 pl-3 pr-4 rounded lg:border-0 lg:py-5 traced-black">
                            Stellae
                        </button>
                        <!--Org, Donos, Marca, Parceiros-->
                    </li>
                </ul>
            </div>
        </div>

        <div v-show="teamsMenu" @mouseover="teamsMenu = true" @mouseleave="teamsMenu = false">
            <TeamsMenu />
        </div>
    </nav>
</template>

<style>
.traced-black {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: #67e8f9;
}

.menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
}

.line {
    fill: none;
    stroke-width: 7;
    transition: stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-color-white {
    stroke: white;
}

.line-color-black {
    stroke: #67e8f9;
}

.line1 {
    stroke-dasharray: 60 207;
    stroke-width: 7;
}

.line2 {
    stroke-dasharray: 60 60;
    stroke-width: 7;
}

.line3 {
    stroke-dasharray: 60 207;
    stroke-width: 7;
}

.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}

.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
}

.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}
</style>