<script setup>
const showLoginForm = ref(false)
</script>

<template>
  <div>
    <FormAuth v-if="showLoginForm">
      <h1>Регистрация</h1>
      <FormRegister />
      <button @click="showLoginForm = !showLoginForm" type="button" class="btn btn-link align-self-center">
        Уже есть аккаунт?
      </button>
    </FormAuth>
    <FormAuth v-else>
      <h1>Вход</h1>
      <FormLogin />
      <button @click="showLoginForm = !showLoginForm" type="button" class="btn btn-link align-self-center">
        Создать аккаунт
      </button>
    </FormAuth>
  </div>
</template>
