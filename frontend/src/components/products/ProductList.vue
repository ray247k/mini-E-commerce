<template>
  <div>
    <div class="products">
      <div class="container">This is ProductList</div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product__name">產品名稱：{{product.name}}</p>
          <p class="product__description">簡介：{{product.description}}</p>
          <p class="product__price">價錢：{{product.price}}</p>
          <p class="product.manufacturer">生產商：{{product.manufacturer}}</p>
          <img :src="product.image" alt class="product__image" />
          <button @click="addToCart(product)">加入購物車</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
export default {
  name: "product-list",
  computed: {
    // a computed getter
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", {
        product
      });
    }
  }
};
</script>
