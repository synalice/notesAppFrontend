<script setup>
const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  isUsersProfile: {
    type: Boolean,
    default: false
  },
})

function logout() {
  localStorage.removeItem("jwtToken")
  navigateTo({ path: '/auth' })
}
</script>

<template>
  <ClientOnly>
    <div v-if="props.isLoggedIn" class="card">
      <div class="card-body d-flex flex-wrap align-items-center justify-content-center gap-3">
        <button v-if="props.isUsersProfile" type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#createNewPostModal">
          Создать запись
        </button>
        <button type="button" class="btn btn-secondary" @click="logout()">
          Выйти из аккаунта
        </button>
      </div>
      <ModalNewPost />
    </div>
  </ClientOnly>
</template>
