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
</script>

<template>
  <div class="card w-100">
    <h5 class="card-title card-header">
      <slot name="title"></slot>
    </h5>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-body-secondary">
        Автор: <slot name="author-nickname"></slot>
      </h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        <ClientOnly fallback-tag="span" fallback="Загрузка даты...">
          Дата написания: <slot name="date-created"></slot>
        </ClientOnly>
      </h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        Символов: <slot name="symbols"></slot>
      </h6>
      <p class="card-text">
        <slot name="contents"></slot>
      </p>
    </div>
    <div v-if="props.isLoggedIn" class="card-footer">
      <AccountPostButtons
        :is-users-profile="isUsersProfile"
      />
    </div>
  </div>
</template>
