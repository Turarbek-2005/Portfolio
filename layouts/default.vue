<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = 'light';

useSeoMeta({
    title: 'Kabdesh Turarbek',
});
</script>
<template>
    <div>
        <Header />

        <div>
            <slot />
        </div>
    </div>
</template>
<style scoped></style>
