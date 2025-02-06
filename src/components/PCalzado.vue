<template>
  <div class="calzado">
    <h1 class="title">Colección de Calzado</h1>

    <form @submit.prevent="validateSearch">
      <SearchBar v-model="searchQueryInput" />
      <button type="submit" class="search-btn">Buscar</button>
    </form>
    <p v-if="searchError" class="error-message">{{ searchError }}</p>
    <!-- Missatge quan no hi ha productes -->
    <p v-if="!searchError && filteredProducts.length === 0" class="no-results">
      No se han encontrado productos.
    </p>
    <!-- Productes només si hi ha resultats -->
    <section class="products" v-else>
        <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </section>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import SearchBar from "./SearchBar.vue";

export default {
  name: 'PCalzado',
  components: {
    ProductCard,
    SearchBar,
  },
  data() {
    return {
      searchQueryInput: '', // Camp de text del formulari
      searchQuery: '', // Variable vinculada al camp de cerca
      searchError: '', // missatge d'error
      products: [
        { id: 1, name: 'Tennis blancos', description: 'Perfecto para ocasiones especiales.', price: 39.99, image: '/img/calzado1.jpg' },
        { id: 2, name: 'Botas marrones con forro', description: 'Ideal para los días fríos de invierno.', price: 29.99, image: '/img/calzado2.jpg' },
        { id: 3, name: 'Sandalias con plataforma', description: 'Perfectos para una jornada formal.', price: 49.99, image: '/img/calzado3.jpg' },
        { id: 4, name: 'Mocasines verdes', description: 'Un clásico para cualquier temporada.', price: 79.99, image: '/img/calzado4.jpg' },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.searchQuery.trim() === '') {
        return this.products; // Retorna tots els productes si no hi ha cap cerca activa
      }
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    validateSearch() {
      if (this.searchQueryInput.trim() === '') {
        this.searchError = 'El campo de búsqueda no puede estar vacio.';
        this.searchQuery = ''; // No es fa cap cerca
      } else {
        this.searchError = '';
        this.searchQuery = this.searchQueryInput; // Activa la consulta
      }
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.calzado {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Títulos */
.title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  color: #222;
  margin: 30px 10px;
}

/* Contenedor de search-bar */
form {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}

/* Barra de búsqueda */
.search-bar {
  width: 100%;
  max-width: 500px;
  padding: 12px 30px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.search-bar:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
}

/* Botón de búsqueda */
.search-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.search-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
/* Contenedor de productos */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
}

/* Tarjeta de producto */
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card-content {
  padding: 15px;
  text-align: center;
}

.product-card-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.product-card-content p {
  font-size: 0.9rem;
  color: #777;
  margin: 8px 0;
}

.product-card-content .price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
}

/* Mensajes de error */
.error-message, .no-results {
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
}

.error-message {
  color: #ff3b3b;
}

.no-results {
  color: #555;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2.2rem;
  }

  .search-bar {
    max-width: 90%;
  }

  .products {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .product-card img {
    height: 180px;
  }
}
</style>
