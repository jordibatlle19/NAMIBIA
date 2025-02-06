<template>
  <div class="container">
    <div class="item">
      <i>
        <slot name="link"></slot>
      </i>
    </div>
  </div>
</template>
<style scoped>
.item{
    display: flex;
    justify-content: center;
    padding: 20px 40px;
    
}
</style>
