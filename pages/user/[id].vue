<script setup>
definePageMeta({
  middleware: "auth"
});

// If true - it means that you are logged in and are inside your own profile
// instead of someone's else. 
const isYourProfile = ref(false)
const route = useRoute()

const { data, pending, error } = await useFetch('http://localhost:8080/api/v1/account-data', {
  query: {
    "id": route.params.id
  }
})
</script>

<template>
  <div>
    <template v-if="pending">
      <AccountHeader :pending="true" />
    </template>
    <template v-else>
      <AccountHeader
        :nickname="data.user.nickname"
        :registered-date="data.user.dateCreated"
        :number-of-posts="data.numberOfNotes"
      />
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
    <div v-else-if="error" class="card">
      <h5 class="card-title card-header">
        <slot name="title">Ошибка</slot>
      </h5>
      <div class="card-body">
        {{ error }}
      </div>
    </div>
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
        <template #date-created>{{ note.date_created }}</template>
        <template #symbols>{{ note.symbols }}</template>
        <template #contents>{{ note.contents }}</template>
      </AccountPost>
    </template>
    </AccountPosts>
  </div>
</template>
