<script setup lang="ts">
const items = [
  {
    img: "/Projects/vamos.png",
    to: "https://vamos-vert.vercel.app",
    label: "Vamos",
    text: "Vamos это сайт на подобии инстаграмма, тут вы можете создавать публикации, комментировать посты, редактировать аккаунт и т.д.",
  },
  {
    img: "/Projects/imperials.svg",
    to: "https://imperials.vercel.app",
    label: "Imperials",
    text: "Этот сайт был сделан на заказ, тут продемонстрированы мои навыки делать сайт адаптивным без использования tailwindcss.",
  },
  {
    img: "/Projects/aiu.jpg",
    to: "https://aiu-front.vercel.app",
    label: "AIU",
    text: "Это недоконченный проект для университета AIU, который создавался группой людей и был создан через обычный VUE, а не через Nuxt.",
  },
];
</script>
<template>
  <div class="container mx-auto relative">
    <div
      class="block lg:fixed w-full lg:w-80 xl:w-4/12 top"
      data-aos="fade-right"
    >
      <h2 class="text-5xl xl:text-7xl mb-5">Мои проекты</h2>
      <h4 class="text-xl">
        Тут находятся мои самостоятельные и командные проекты, которые я сделал
        с помощью Vue (Nuxt) js.
      </h4>
    </div>
    <div class="w-full flex items-end flex-col mt-8 gap-5 mb-10">
      <div
        v-for="item of items"
        data-aos="fade-up"
        class="w-full lg:w-3/5 xl:w-1/2 sm:h-72 bg-stone-200 rounded-3xl sm:flex items-center text-center sm:text-left gap-5 p-7"
      >
        <div
          class="overflow-hidden mb-5 sm:mb-0 mx-auto sm:mx-0 w-52 h-52 flex items-center justify-center rounded-full bg-white animate"
          data-aos="fade-up"
        >
          <NuxtImg :src="item.img" class="w-2/3" />
        </div>
        <div class="w-full sm:w-2/3" data-aos="fade-up">
          <h4 class="title text-2xl mb-4">{{ item.label }}</h4>
          <p class="mb-3 w-11/12 mx-auto sm:mx-0 sm:w-full">
            {{ item.text }}
          </p>
          <NuxtLink
            :to="item.to"
            class="text-stone-400 animate-link relative text-xl"
            >Перейти</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.top {
  top: calc(50% - 5rem);
}

.title {
  font-family: "Playwrite CU", sans-serif;
}

.animate {
  animation: liquid 7s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
.animate-link:after {
  content: "";
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
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 2px; /* Высота линии */
  background-color: #5f5340; /* Цвет подчеркивания при появлении линии*/
  transition: width 0.5s; /* Время эффекта */
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
</style>
