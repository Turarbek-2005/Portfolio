<script setup lang="ts">
const route = useRoute();
const isOpen = ref(false);
const links = [
    {
        label: 'Главная',
        icon: 'i-heroicons-home',
        to: '/',
    },
    {
        label: 'Проекты',
        icon: 'i-heroicons-folder-open',
        to: '/Projects',
    },
    {
        label: 'Обо мне',
        icon: 'i-heroicons-light-bulb-solid',
        to: '/About',
    },
    {
        label: 'Контакты',
        icon: 'i-heroicons-phone',
        to: '/Contacts',
    },
];
</script>
<template>
    <div class="h-20 flex items-center bg-customWhite w-full">
        <div class="container flex justify-between items-center mx-auto">
            <NuxtLink to="/"
                ><h1 class="text-xl sm:text-2xl logo text-customBrown">
                    Kabdesh Turarbek
                </h1></NuxtLink
            >

            <div class="items-center gap-3 hidden lg:flex">
                <div
                    class="flex items-center gap-2 animate-link relative"
                    v-for="link of links"
                >
                    <UIcon :name="link.icon" />
                    <NuxtLink class="text-lg" :to="link.to">{{
                        link.label
                    }}</NuxtLink>
                </div>
            </div>
            <div class="space-y-1.5 lg:hidden" @click="isOpen = true">
                <span class="block h-1 w-8 bg-customBrown rounded"></span>
                <span class="block h-1 w-8 bg-customBrown rounded"></span>
                <span class="block h-1 w-8 bg-customBrown rounded"></span>
            </div>
            <USlideover v-model="isOpen">
                <div class="p-4 flex-1 bg-customWhite">
                    <UButton
                        color="gray"
                        variant="ghost"
                        size="sm"
                        icon="i-heroicons-x-mark-20-solid"
                        class="flex sm:hidden absolute end-5 top-5 z-10"
                        square
                        padded
                        @click="isOpen = false"
                    />
                    <div class="items-center gap-5 flex flex-col">
                        <div
                            class="flex items-center mt-10 gap-5"
                            v-for="link of links"
                            @click="isOpen = false"
                        >
                            <div class="h-8 w-8">
                                <UIcon
                                    :name="link.icon"
                                    class="w-full h-full"
                                />
                            </div>
                            <NuxtLink class="text-3xl" :to="link.to">{{
                                link.label
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </USlideover>
        </div>
    </div>
</template>
<style scoped>
.logo {
    font-family: 'Playwrite CU', sans-serif;
}
.animate-link:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: #5f5340;
    transition: width 0.5s;
}

.animate-link:hover:after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; /* Высота линии */
    background-color: #5f5340; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s; /* Время эффекта */
}
</style>
