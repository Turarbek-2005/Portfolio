<script setup lang="ts"></script>

<template>
    <div class="flex xl:mt-32 md:mt-20 mt-5 mb-32 sm:mb-48 xl:mb-40 2xl:mb-60">
        <div class="container mx-auto relative">
            <div class="z-10 lg:w-7/12" data-aos="fade-up-right">
                <h2 class="text-4xl xl:text-5xl mb-4">
                    Привет! Меня зовут Турарбек!
                </h2>
                <p class="w-full text-xl xl:text-2xl mb-8">
                    Front-end Developer Vue (Nuxt) js
                </p>
                <p class="w-full text-lg xl:text-xl leading-8 xl:leading-9">
                    Добро пожаловать на мой сайт-портфолио! Здесь вы можете
                    познакомится со
                    <NuxtLink class="underline" to="/About">мной</NuxtLink>,
                    посмотреть мои
                    <NuxtLink class="underline" to="/Projects"
                        >проекты</NuxtLink
                    >
                    и найти мои
                    <NuxtLink class="underline" to="/Contacts"
                        >контактные данные</NuxtLink
                    >. Рад, что вы здесь, и надеюсь, вам понравится то, что вы
                    увидите!
                </p>
            </div>
            <NuxtImg
                src="/home-bg.png"
                data-aos="fade-up-right"
                class="hidden md:block absolute w-1/3 xl:right-40 sm:right-10 md:-top-10 sm:-top-20 -z-10 2xl:-top-20"
            />
            <NuxtImg
                src="/home-adaptive-bg.png"
                class="block md:hidden absolute w-2/3 top-20 sm:top-0 right-10 -z-10 opacity-60"
            />
        </div>
    </div>
</template>

<style scoped>
/* .bg {
    height: calc(100vh - 10rem);
    padding-top: 10%;
} */
</style>
