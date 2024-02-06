<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          Заметки
        </NuxtLink>
        <NavbarItems />
      </div>
    </nav>
    <ModalConfirm text="Вы уверены, что хотитите очистить список избранных заметок? Сами заметки удалены не будут." />
  </header>
</template>
