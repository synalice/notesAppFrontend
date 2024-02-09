<template>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
    </span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto">
      <NavbarItem href="/people">
        <IconPeople/>
        Другие люди
      </NavbarItem>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center gap-2 gap-lg-1" href="#" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <IconStar />
          Избранное
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              &lt;пусто&gt;
            </a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li>
            <button type="button" class="btn dropdown-item" data-bs-toggle="modal" data-bs-target="#clearConfirmModal">
              Очистить
            </button>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="navbar-nav mb-2 mb-lg-0">
      <NavbarItem href="/account">
        <IconAccount />
        Аккаунт
      </NavbarItem>
    </ul>
  </div>
</template>
