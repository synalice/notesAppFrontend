<script setup>
let nickname = ref()
let password = ref()

let form = ref()
let wasValidated = ref(false)

function onSubmit(event) {
  let isValid = true

  if (!form.value.checkValidity()) {
    isValid = false
    event.preventDefault()
    event.stopPropagation()
  }

  wasValidated.value = true

  if (isValid) {
    login()
  }
}

async function login() {
  const { data, error } = await useFetch('http://app:8080/api/v1/login', {
    method: "post",
    body: {
      "nickname": nickname.value,
      "password": password.value
    }
  })

  if (error.value) {
    console.error(error.value);
    return
  }

  localStorage.setItem("jwtToken", data.value.jwt)
  navigateTo({ path: '/account' })
}
</script>

<template>
  <form ref="form" :class="{ 'was-validated': wasValidated }" class="d-flex flex-column w-100 needs-validation" novalidate
    @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="InputNickname" class="form-label">Имя аккаунта</label>
      <input v-model="nickname" type="text" class="form-control" id="InputNickname" required>
    </div>
    <div class="mb-3">
      <label for="InputPassword" class="form-label">Пароль</label>
      <input v-model="password" type="password" class="form-control" id="InputPassword" required>
    </div>
    <button type="submit" class="btn btn-primary align-self-center">Войти</button>
  </form>
</template>
