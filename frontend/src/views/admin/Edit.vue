<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue";
export default {
  data() {
    const product = this.$store.getters.productById(this.$route.params["id"]);
    return {
      // 回傳 product 的備份，是為了在修改 product 的備份之後，在保存之前不修改本地 Vuex store 的 product 屬性
      model: { ...product, manufacturer: { ...product.manufacturer } }
    };
  },
  created() {
    const { name } = this.model;
    if (!name) {
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch("updateProduct", {
        product
      });
    }
  },
  components: {
    "product-form": ProductForm
  }
};
</script>