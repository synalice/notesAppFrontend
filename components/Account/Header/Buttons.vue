<script setup>
function logout() {
  localStorage.removeItem("jwtToken")
  navigateTo({ path: '/auth' })
}
</script>

<template>
  <div class="card">
    <div class="card-body d-flex flex-wrap align-items-center justify-content-center gap-3">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createNewPostModal">
        Создать запись
      </button>
      <button type="button" class="btn btn-secondary" @click="logout()">
        Выйти из аккаунта
      </button>
    </div>
  </div>
  <ModalNewPost />
</template>
