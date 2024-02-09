<script setup>
const props = defineProps({
  onConfirm: {
    type: Function,
  },
  id: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Осторожно!"
  },
  text: {
    type: String,
    default: "Вы уверены?"
  },
  btnSecondaryText: {
    type: String,
    default: "Отменить"
  },
  btnPrimaryText: {
    type: String,
    default: "Да"
  },
})
</script>

<template>
  <div class="modal fade" :id="props.id" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">
            {{ props.title }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          {{ props.text }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            {{ props.btnSecondaryText }}
          </button>
          <button type="button" class="btn btn-primary">
            {{ props.btnPrimaryText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
