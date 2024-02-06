<script setup>
const props = defineProps({
  pending: {
    type: Boolean,
    default: false
  },
  nickname: {
    type: String,
  },
  numberOfPosts: {
    type: Number,
  },
  profilePictureLink: {
    type: String,
    default: "/clouds.png"
  },
  registeredDate: {
    type: String,
  },
})
</script>

<template>
  <section class="container mb-3 d-flex flex-column">
    <div class="row d-flex justify-content-center">
      <div class="col col-lg-8">
        <div v-if="props.pending" class="container d-flex flex-wrap justify-content-center gap-3 mb-3">
          <NuxtImg :src="props.profilePictureLink" width="200px" height="200px" alt="Profile picture" />
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Загрузка...
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Зарегистрирован: Загрузка...
              </h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Количество постов: Загрузка...
              </h6>
            </div>
          </div>
        </div>
        <div v-else class="container d-flex flex-wrap justify-content-center gap-3 mb-3">
          <NuxtImg :src="props.profilePictureLink" width="200px" height="200px" alt="Profile picture" />
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ props.nickname }}
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Зарегистрирован: {{ props.registeredDate }}
              </h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Количество постов: {{ props.numberOfPosts }}
              </h6>
            </div>
          </div>
        </div>
        <AccountHeaderButtons />
      </div>
    </div>
  </section>
</template>
