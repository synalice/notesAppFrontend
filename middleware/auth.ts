export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return;
  }

  const { data, error } = await useFetch(
    "http://localhost:8080/api/v1/verify-jwt",
    {
      method: "post",
      body: {
        jwt: localStorage.getItem("jwtToken"),
      },
    }
  );

  if (error.value) {
    return navigateTo("/auth");
  }
});
