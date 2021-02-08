<template>
  <div id="app">
    <header>
      <div class="balance">
        Balance:
        <span>{{ balance }}</span>
      </div>
    </header>
    <span class="product-grid">
      <product-card
        :key="product._id"
        v-for="product in products"
        :product="product"
        :balance="balance"
        @redeem="redeemProduct"
      ></product-card>
    </span>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import { getProducts } from "./api";

export default {
  name: "App",
  components: {
    ProductCard,
  },
  mounted() {
    getProducts().then((products) => (this.products = products));
  },
  data() {
    return {
      balance: 1000,
      products: [],
    };
  },
  watch: {
    balance(newBalance) {
      console.log("New Balance:", newBalance);
    },
  },
  methods: {
    redeemProduct(product) {
      // fetch api with product
      if (this.balance > this.balance - product.price) {
        this.balance -= product.price;
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#app {
  max-width: 1600px;
  margin: 20px auto;
  position: relative;
}
.balance {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: orangered;
  color: white;
}
.product-grid {
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
