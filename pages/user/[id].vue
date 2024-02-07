<script setup>
import { jwtDecode } from "jwt-decode";

// definePageMeta({
//   middleware: [
//     "error-if-no-such-user"
//   ]
// });

const route = useRoute()

const { data, pending, error } = await useFetch('http://localhost:8080/api/v1/account-data', {
  query: {
    "id": route.params.id
  }
})

// If true - it means that you are logged in and are inside your own profile
// instead of someone's else.
const isUsersProfile = computed(() => {
  if (process.server) {
    return false
  }

  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return false;
  }

  const tokenPayload = jwtDecode(token);
  if (tokenPayload.sub !== route.params.id) {
    return false
  }

  return true
})

const isLoggedIn = computed(() => {
  if (process.server) {
    return false
  }

  if (localStorage.getItem("jwtToken")) {
    return true
  }
})

</script>

<template>
  <div>
    <template v-if="pending">
      <AccountHeader pending />
    </template>
    <div v-else-if="error" class="card">
      <h5 class="card-title card-header">
        Ошибка
      </h5>
      <div class="card-body">
        Пользователь не найден.
      </div>
    </div>
    <template v-else>
      <AccountHeader :is-users-profile="isUsersProfile" :is-logged-in="isLoggedIn" :nickname="data.user.nickname"
        :registered-date="data.user.dateCreated" :number-of-posts="data.numberOfNotes" />
    </template>
    <AccountPosts>
      <div v-if="pending" class="card">
        <h5 class="card-title card-header">
          <slot name="title">Загрузка</slot>
        </h5>
        <div class="card-body">
          ...
        </div>
      </div>
      <template v-else-if="error">
      </template>
      <div v-else-if="data.notes === null" class="card">
        <h5 class="card-title card-header">
          <slot name="title">Заметки отсутствуют :(</slot>
        </h5>
        <div class="card-body">
          Тут пока что ничего нет.
        </div>
      </div>
      <template v-else>
        <AccountPost v-for="note in data.notes">
          <template #title>{{ note.title }}</template>
          <template #author-nickname>{{ data.user.nickname }}</template>
          <template #date-created>
            {{ new Date(note.dateCreated).toLocaleString() }}
          </template>
          <template #symbols>{{ note.symbols }}</template>
          <template #contents>{{ note.contents }}</template>
        </AccountPost>
      </template>
    </AccountPosts>
  </div>
</template>
