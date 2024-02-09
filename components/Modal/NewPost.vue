<script setup>
const config = useRuntimeConfig()

let title = ref()
let contents = ref()

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
    post()
  }
}

async function post() {
  const { data, error } = await useFetch(`${config.public.backendApi}/api/v1/new-post`, {
    method: "post",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken")
    },
    body: {
      "title": title.value,
      "contents": contents.value,
    }
  })

  if (error.value) {
    console.log(error.value);
    return
  }
}
</script>

<template>
  <div class="modal fade" id="createNewPostModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Создать запись</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form ref="form" id="newPost" :class="{ 'was-validated': wasValidated }" class="needs-validation" novalidate
            @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Заголовок</label>
              <input v-model="title" type="text" class="form-control" id="recipient-name" required>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Содержимое</label>
              <textarea v-model="contents" class="form-control" id="message-text" required></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" form="newPost" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
