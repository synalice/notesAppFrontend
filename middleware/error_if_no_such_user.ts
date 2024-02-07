export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data, pending, error } = await useFetch(
    "http://localhost:8080/api/v1/user-exists",
    {
      query: {
        id: to.params.id,
      },
      onResponseError() {
        throw createError({
          statusCode: 404,
          statusMessage: "User Not Found",
          fatal: true,
        });
      },
    }
  );
});
