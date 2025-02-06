<script setup>
import CategoryItem from "./CategoryItem.vue";
</script>

<template>
  <h1 class="title">Bienvenid@s a Namibia</h1>

  <section class="category-section">
    <h2 class="subtitle">Categorías</h2>
    <div class="category-items">
      <div class="category-card">
        <CategoryItem>
          <template #img>
            <img class="logo" src="../../public/img/ropa.png" />
          </template>
          <template #heading>Ropa</template>
          <router-link to="/ropa">
            <button>Acceder al Catálogo</button>
          </router-link>
        </CategoryItem>
      </div>

      <div class="category-card">
        <CategoryItem>
          <template #img>
            <img class="logo" src="../../public/img/calzado.png" />
          </template>
          <template #heading>Calzado</template>
          <router-link to="/calzado">
            <button>Acceder al Catálogo</button>
          </router-link>
        </CategoryItem>
      </div>
      
      <div class="category-card">
        <CategoryItem>
          <template #img>
            <img class="logo" src="../../public/img/complementos.png" />
          </template>
          <template #heading>Complementos</template>
          <router-link to="/complementos">
            <button>Acceder al Catálogo</button>
          </router-link>
        </CategoryItem>
      </div>
    </div>
  </section>

</template>

<style>
.title {
  font-size: 43px;
  text-align: center;
  margin: 30px auto 20px;
}

.subtitle {
  font-size: 30px;
  text-align: left;
  margin: 30px auto 20px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  background-color: #0066d4;
}

button a {
  text-decoration: none;
  color: white;
}

.category-section {
  margin-left: 60px;
  display: flex;
  flex-direction: column;
}

.category-items {
  display: flex;
  flex-direction: row;
  margin: 20px auto;
}


/* Responsive styles */
@media (max-width: 960px) {
  .title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 24px;
    text-align: center;
  }

  .category-section {
    margin-left: 20px;
    margin-right: 20px;
  }

  .category-items {
    flex-direction: column;
    align-items: center;
    margin: auto 200px;
  }

  .category-card {
    width: 100%;
    margin: 15px 0;
    display: grid;
    
  }

  .logo {
    width: 120px;
  }

  button {
    font-size: 14px;
    padding: 8px 10px;
  }
}
</style>
