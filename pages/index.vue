<script setup lang="ts"></script>

<template>
    <div class="flex items-center bg">
        <div class="container mx-auto relative">
            <div class="z-10 lg:w-7/12" data-aos="fade-up-right">
                <h2 class="text-4xl xl:text-5xl mb-4">
                    Привет! Меня зовут Турарбек!
                </h2>
                <p class="w-full text-xl xl:text-2xl mb-8">
                    <!-- Я Junior Front-end программирующий на Vue (Nuxt) js. -->
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
        </div>
    </div>
</template>

<style scoped>
.bg {
    height: calc(100vh - 10rem);
}
</style>
