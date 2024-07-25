// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@nuxtjs/color-mode', [
        '@nuxtjs/google-fonts',
        {
            families: {
                'Playwrite CU': {
                    wght: [300, 400],
                },
                Roboto: {
                    wght: [300, 400, 500, 600, 700, 800, 900],
                },
            },
        },
    ], "@nuxt/image", "nuxt-aos"],
});