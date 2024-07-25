<script setup lang="ts"></script>
<template>
    <div class="container mx-auto">
        <h2 class="text-5xl lg:text-7xl mb-5" data-aos="fade-right">
            Контакты
        </h2>
        <h4 class="text-xl md:text-2xl mb-5">
            Если хотите написать по поводу сотрудничества, пишите в одну из этих
            соц сетей.
        </h4>
        <div
            class="flex flex-wrap gap-3 justify-center sm:justify-start"
            data-aos="fade-up"
        >
            <div class="flex flex-col">
                <strong class="text-2xl">Соц сети</strong>
                <NuxtLink
                    to="https://www.instagram.com/kab_desh"
                    class="social-container instagram"
                >
                    <div class="social-cube">
                        <div class="front">Instagram</div>
                        <div class="bottom">@kab_desh</div>
                    </div>
                </NuxtLink>
                <NuxtLink
                    to="https://t.me/kab_desh"
                    class="social-container telegram"
                >
                    <div class="social-cube">
                        <div class="front">Telegram</div>
                        <div class="bottom">@kab_desh</div>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex flex-col">
                <strong class="text-2xl">Портфолио</strong>
                <NuxtLink
                    to="https://github.com/Turarbek-2005"
                    class="social-container guthub"
                >
                    <div class="social-cube">
                        <div class="front">GitHub</div>
                        <div class="bottom">Turarbek-2005</div>
                    </div>
                </NuxtLink>
            </div>

            <div class="flex flex-col">
                <strong class="text-2xl">Почта</strong>
                <NuxtLink
                    to="mailto:turarbek.kabdesh@mail.ru"
                    class="social-container mail"
                >
                    <div class="social-cube">
                        <div class="front">Mail</div>
                        <div class="bottom">turarbek</div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.social-container {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 60px;
    perspective: 300px;
    font-size: 24px;
    margin: 8px;
}
.social-cube {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.333s;
    transform: translateZ(-18px);
}

.social-container:hover .social-cube {
    transform: translateZ(-18px) rotateX(90deg);
}
.front,
.bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: background 0.333s;
}
.front {
    transform: rotateX(0deg) translateZ(30px);
}
.bottom {
    transform: rotateX(-90deg) translateZ(30px);
}
.instagram .front,
.instagram .bottom {
    background: linear-gradient(
        90deg,
        rgba(136, 0, 255, 1) 0%,
        rgba(235, 0, 255, 1) 50%,
        rgba(254, 7, 7, 1) 100%
    );
}
.guthub .front,
.guthub .bottom {
    background: black;
}
.telegram .front,
.telegram .bottom {
    background: rgb(0, 195, 255);
}
.mail .front,
.mail .bottom {
    background: rgb(68, 0, 255);
}
</style>
