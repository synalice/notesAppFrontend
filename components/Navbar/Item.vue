<script setup>
const props = defineProps({
  href: {
    type: String,
    default: "#"
  },
})
</script>

<template>
  <li class="nav-item">
    <NuxtLink class="nav-link d-flex align-items-center gap-2 gap-lg-1" :to="props.href">
      <slot>
        <IconSmile />
        Ссылка
      </slot>
    </NuxtLink>
  </li>
</template>
