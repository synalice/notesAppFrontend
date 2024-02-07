import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to, from) => {
  // User this middleware only on the client since we need access to the 
  // localStorage.
  if (process.server) {
    return;
  }

  // Get token from LS.
  const token = localStorage.getItem("jwtToken");

  // Redirect to "/auth" if no token.
  if (!token) {
    return navigateTo("/auth");
  }

  // Redirect to user's page if he has his own token.
  const tokenPayload = jwtDecode(token);
  return navigateTo(`/user/${tokenPayload.sub}`);
});
