<script setup lang="ts">
const animate1 =
    'bg-red-500 p-3 animate-1 m-1 text-white text-xl sm:text-3xl inline-block';
const animate2 =
    'bg-red-500 p-3 animate-2 m-1 text-white text-xl sm:text-3xl inline-block';
</script>
<template>
    <div class="container mx-auto">
        <h2 class="text-5xl lg:text-7xl mb-5" data-aos="fade-right">Обо мне</h2>
        <div class="flex lg:flex-row flex-col gap-5">
            <div class="w-52 sm:w-72 lg:w-1/4 mx-auto lg:mx-0">
                <NuxtImg
                    src="/frame.png"
                    class="w-full intro-photo bg-cover bg-center rounded-full"
                    data-aos="fade-right"
                />
            </div>
            <div
                class="w-full lg:w-2/3"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <p class="text-2xl mb-5">
                    Я Front-end разработчик и программирую на Vue (Nuxt) js.
                    Учусь в третьем курсе в университете AIU и тут написаны мои
                    навыки.
                </p>
                <div class="text-xl sm:text-2xl bg-yellow p-5 rounded-xl mb-4">
                    <p>
                        <strong
                            >Итак, при работе с проектами я использую</strong
                        >
                        <span :class="animate1">HTML</span>
                        <span :class="animate2">CSS</span>
                        <span :class="animate1">SASS</span>
                        <span :class="animate2">JavaScript</span>
                        <span :class="animate1">Vue js</span>
                        <span :class="animate2">Nuxt js</span>
                        <span :class="animate1">Pinia</span>
                        <span :class="animate2">Vue Query</span>
                        <span :class="animate1">Tailwindcss</span>
                        <strong> и много чего ещё.</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.intro-photo {
    background-image: url(/me.jpg);
    animation: rotateHue 3s infinite alternate;
}
.bg-yellow {
    background-color: #e9fd06;
    line-height: 4rem;
}

@media screen and (min-width: 640px) {
    .bg-yellow {
        line-height: 2rem;
    }
}
@keyframes rotateHue {
    100% {
        filter: grayscale(70%);
    }
}
.animate-1 {
    animation: liquid 7s ease-in-out infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.animate-2 {
    animation: liquid2 7s ease-in-out infinite;
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}

@keyframes liquid {
    0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        background-size: 100% 100%;
    }
    50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        background-size: 300% 150%;
    }
    100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        background-size: 100% 100%;
    }
}
@keyframes liquid2 {
    0% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        background-size: 100% 100%;
    }
    50% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        background-size: 300% 150%;
    }
    100% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        background-size: 100% 100%;
    }
}
</style>
