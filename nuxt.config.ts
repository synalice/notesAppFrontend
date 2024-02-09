const devApi = "http://localhost:8080"
const prodApi = "https://syn-dev.ru";
const backendApi = process.env.NODE_ENV === "development" ? devApi : prodApi;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      backendApi: backendApi,
    },
  },

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
    // TODO: This sollution is ducktape but it works. To make things better - find a way to make
    //       useFetch calls only on client (probably call them only in components and wrap those
    //       inside <ClientOnly/>).
    "/user/**": { ssr: false },
  },
});
