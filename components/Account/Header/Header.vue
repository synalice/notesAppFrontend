<template>
  <section class="container mb-3 d-flex flex-column">
    <div class="row d-flex justify-content-center">
      <div class="col col-lg-8">
        <div class="container d-flex flex-wrap justify-content-center gap-3 mb-3">
          <NuxtImg src="/clouds.png" width="200px" height="200px" alt="Profile picture" />
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Никнейм</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Зарегистрирован: 24.07.23</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">Количество постов: 6</h6>
            </div>
          </div>
        </div>
        <AccountHeaderButtons />
      </div>
    </div>
  </section>
</template>
