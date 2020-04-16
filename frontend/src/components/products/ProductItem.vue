<template>
  <div class="products">
    <el-table class="table" :data="products" max-height="250">
      <el-table-column prop="name" label="產品名稱" width="180"></el-table-column>
      <el-table-column prop="description" label="介紹" width="180"></el-table-column>
      <el-table-column prop="price" label="售價" width="180"></el-table-column>
      <el-table-column prop="manufacturer.name" label="製造商" width="180"></el-table-column>
      <!-- <el-table-column
        label="圖片""
        width="200">
        <img :src="image" alt="" class="product__image">
      </el-table-column>-->
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
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
import ProductButton from "./ProductButton";
export default {
  name: "product-item",
  props: ["products"],
  components: {
    "product-button": ProductButton
  }
};
</script>
