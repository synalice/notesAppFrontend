<script setup>
const props = defineProps({
  isUsersProfile: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div class="d-flex gap-1">
    <button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="button">
      В избранное
    </button>
    <template v-if="props.isUsersProfile">
      <button type="button" class="btn btn-outline-secondary btn-sm">
        Редактировать
      </button>
      <button type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteNote">
        Удалить
      </button>
    </template>
    <ModalConfirm id="deleteNote" text="Вы уверены, что хотитите удалить эту заметку?" :on-confirm="console.log('aaaa')"/>
    </div>
</template>