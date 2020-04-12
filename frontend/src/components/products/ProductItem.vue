<template>
  <div>
    <div class="product">
      <p class="product__name">商品名稱：{{product.name}}</p>
      <p class="product__description">簡介：{{product.description}}</p>
      <p class="product__price">售價：{{product.price}}</p>
      <p class="product.manufacturer">生產商：{{product.manufacturer.name}}</p>
      <img :src="product.image" alt class="product__image" />
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from "./ProductButton";
export default {
  name: "product-item",
  props: ["product"],
  components: {
    "product-button": ProductButton
  }
};
</script>
