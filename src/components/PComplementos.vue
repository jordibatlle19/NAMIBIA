<template>
  <div class="complementos">
    <h1 class="title">Colección de Complementos</h1>

    <form @submit.prevent="validateSearch">
      <SearchBar v-model="searchQueryInput" />
      <button type="submit" class="search-btn">Buscar</button>
    </form>
    <p v-if="searchError" class="error-message">{{ searchError }}</p>
    <p v-if="!searchError && filteredProducts.length === 0" class="no-results">
      No se han encontrado productos.
    </p>

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
import ProductCard from "./ProductCard.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "PComplementos",
  components: {
    ProductCard,
    SearchBar,
  },
  data() {
    return {
      searchQueryInput: "",
      searchQuery: "",
      searchError: "",
      products: [
        {
          id: 1,
          name: "Bolso multicolor",
          description: "Perfecto para ocasiones especiales.",
          price: 29.99,
          image: "/img/comp1.jpg",
        },
        {
          id: 2,
          name: "Colgante brilli-brilli",
          description: "Ideal para complementar en outfits elegantes",
          price: 39.99,
          image: "/img/comp2.jpg",
        },
        {
          id: 3,
          name: "Gafas de sol",
          description: "Perfectos para un día informal.",
          price: 19.99,
          image: "/img/comp3.jpg",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.searchQuery.trim() === "") {
        return this.products;
      }
      return this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    validateSearch() {
      if (this.searchQueryInput.trim() === "") {
        this.searchError = "El campo de búsqueda no puede estar vacío.";
        this.searchQuery = "";
      } else {
        this.searchError = "";
        this.searchQuery = this.searchQueryInput;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

.complementos {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  color: #222;
  margin: 30px 10px;
}

form {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}

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

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
}

.error-message,
.no-results {
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
</style>
