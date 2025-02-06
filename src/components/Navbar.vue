<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nav class="navbar">
    <div class="logo-container">
        <img class="logo" src="../../public/img/logo.jpg" alt="Logo">
    </div>
    <h1 class="title">{{ msg }}</h1>
    <div class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/ropa">Ropa</router-link>
      <router-link to="/calzado">Calzado</router-link>
      <router-link to="/complementos">Complementos</router-link>
      <a href="#" target="_blank">Contacto</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fefefe;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo-container {
  flex: 0 0 auto;
}

.logo {
  width: 100%;
  height: 45px;
  object-fit: cover;
}

.title {
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.nav-links {
  flex: 0 0 auto;
  display: flex;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover {
  background-color: #007acc;
  color: #fff;
  border-radius: 5px;
}

@media (max-width: 960px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .title {
    margin-top: 10px;
    font-size: 1.25rem;
  }
}
</style>