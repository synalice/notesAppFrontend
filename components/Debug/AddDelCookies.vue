<script setup>
const myCookie = useCookie("myCookie")

function addCookie() {
  myCookie.value = "I'veAddedCookie!!!"
}

function delCookie() {
  myCookie.value = undefined
}
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="addCookie()" type="button" class="btn btn-primary">Add Cookie</button>
    <button @click="delCookie()" type="button" class="btn btn-primary">Delete Cookie</button>
  </div>
</template>
