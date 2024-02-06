// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/node_modules/bootstrap/dist/css/bootstrap.min.css"],

  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ],
    },
  },

  modules: ["@nuxt/image"],

  routeRules: {
    "/account": { ssr: false },
  },
});
