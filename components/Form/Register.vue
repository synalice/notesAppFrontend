<script setup>
const config = useRuntimeConfig()

let nickname = ref()
let password = ref()
let passwordRepeat = ref()
const passwordsDontMatch = ref(false)

let form = ref()
let wasValidated = ref(false)

function onSubmit(event) {
  let isInvalid = false

  if (!form.value.checkValidity()) {
    isInvalid = true
    event.preventDefault()
    event.stopPropagation()
  }

  if (password.value !== passwordRepeat.value) {
    isInvalid = true
    passwordsDontMatch.value = true
  } else {
    passwordsDontMatch.value = false
  }

  wasValidated.value = true

  if (isInvalid === false) {
    register()
    wasValidated.value = false
  }
}

async function register() {
  const { data, error } = await useFetch(`${config.public.backendApi}/api/v1/register`, {
    method: "post",
    body: {
      "nickname": nickname.value,
      "password": password.value
    }
  })

  if (error.value) {
    console.log(error.value);
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
      <label for="InputNickname" class="form-label">
        Имя аккаунта
      </label>
      <input v-model="nickname" type="text" class="form-control" id="InputNickname" required>
    </div>
    <div class="mb-3">
      <label for="InputPassword" class="form-label">
        Пароль
      </label>
      <input v-model="password" type="password" class="form-control" id="InputPassword" required>
      <p v-if="passwordsDontMatch" class="text-danger mb-0">
        Пароли не совпадают!
      </p>
    </div>
    <div class="mb-3">
      <label for="RepeatPassword" class="form-label">
        Пароль ещё раз
      </label>
      <input v-model="passwordRepeat" type="password" class="form-control" id="RepeatPassword" required>
      <p v-if="passwordsDontMatch" class="text-danger mb-0">
        Пароли не совпадают!
      </p>
    </div>
    <button class="btn btn-primary align-self-center">
      Зарегистрироваться
    </button>
  </form>
</template>
