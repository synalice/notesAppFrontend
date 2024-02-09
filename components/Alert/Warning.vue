<template>
  <div class="alert alert-warning d-flex align-items-center gap-2" role="alert">
    <IconExclamationTriangle />
    <div>
      <slot name="text">Это уведемление с предупреждением</slot>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>
