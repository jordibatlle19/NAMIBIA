<template>
  <div class="search-bar">
    <input
      type="text"
      :value="modelValue"
      placeholder="Buscar productos..."
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.search-bar input {
  width: 300px;
  border: none;
  font-size: 1rem;
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
</style>
