<template>
  <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
    <IconExclamationTriangle />
    <div>
      <slot name="text">Это уведемление с сообщением об ошибке</slot>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>
