<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <template v-for="product in cart">
      <div :key="product._id" class="product">
        <p class="product__name">產品名稱：{{product.name}}</p>
        <p class="product__description">簡介：{{product.description}}</p>
        <p class="product__price">價錢：{{product.price}}</p>
        <p class="product.manufacturer">生產商：{{product.manufacturer}}</p>
        <img :src="product.image" alt class="product__image" />
        <button @click="removeFromCart(product._id)">從購物車中移除</button>
      </div>
    </template>
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
  name: "home",
  data() {
    return {
      msg: "Welcome to the Cart Page"
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", {
        productId
      });
    }
  }
};
</script>
