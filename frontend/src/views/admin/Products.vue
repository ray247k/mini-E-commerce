<template>
  <div class="products">
    <el-table class="table" :data="products">
      <el-table-column prop="name" label="商品" width="180"></el-table-column>
      <el-table-column prop="price" label="售價" width="180"></el-table-column>
      <el-table-column prop="manufacturer.name" label="製造商" width="180"></el-table-column>
      <el-table-column label="管理" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small">
            <router-link :to="'/admin/edit/' + scope.row._id">修改</router-link>
          </el-button>
          <el-button
            class="remove"
            @click="removeProduct(scope.row._id), deleteRow(scope.$index, products)"
            type="text"
            size="small"
          >刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>

<script>
export default {
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    removeProduct(productId) {
      const res = confirm("是否刪除此商品？");
      if (res) {
        this.$store.dispatch("removeProduct", {
          productId
        });
      }
    }
  }
};
</script>
