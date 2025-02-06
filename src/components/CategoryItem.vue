<template>
  <div class="container">
    <div class="item">
      <i>
        <slot name="img"></slot>
      </i>
      <div class="details">
        <i>
          <slot name="heading"></slot>
        </i>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  padding: 40px 10px;
  margin-right: 60px;
  background-color: rgba(239, 239, 239, 0.581);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.details {
  align-self: center;
  margin-left: 10px;
}

i {
  display: flex;
  font-size: 22px;
  color: #333;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  
}
</style>
