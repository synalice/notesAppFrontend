import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    return;
  }

  const token = localStorage.getItem("jwtToken");

  if (!token) {
    return navigateTo("/auth");
  }

  const tokenPayload = jwtDecode(token);
  return navigateTo(`/user/${tokenPayload.sub}`);
});
