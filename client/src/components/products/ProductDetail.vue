<template>
  <div class="product-details">
    <div class="product-details__image">
      <img :src="product.image" alt class="image" />
    </div>
    <div class="product-details__info">
      <div class="product-details__description">
        <small>生產商：{{product.manufacturer.name}}</small>
        <h3>產品名稱：{{product.name}}</h3>
        <p>簡介：{{product.description}}</p>
      </div>
      <div class="product-details__price-cart">
        <p>價錢：{{product.price}}</p>
        <product-button :product="product"></product-button>
      </div>
    </div>
  </div>
</template>

<style>
.product-details__image .image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductButton from "./ProductButton";
export default {
  props: ["product"],
  components: {
    "product-button": ProductButton
  }
};
</script>