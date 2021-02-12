<template>
  <div id="app">
    <top-bar :balance="balance"></top-bar>
    <header class="header">
      <div class="title">Electronics</div>
      <div class="overlay"></div>
    </header>
    <span class="product-grid">
      <product-card
        v-for="product in products"
        :key="product._id"
        :product="product"
        :balance="balance"
        @redeem="redeemProduct"
        @select="productSelected"
      ></product-card>
    </span>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import TopBar from "./components/TopBar.vue";
import { getProducts } from "./api";

export default {
  name: "App",
  components: {
    ProductCard,
    TopBar,
  },
  mounted() {
    getProducts().then((products) => (this.products = products));
  },
  data() {
    return {
      balance: 1000,
      idSelected: null,
      products: [],
    };
  },
  watch: {
    balance(newBalance) {
      console.log("New Balance:", newBalance);
    },
  },
  methods: {
    productSelected(id) {
      this.products.forEach(
        (p) => (p.isSelected = p.id !== id ? false : !p.isSelected)
      );
    },
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
body {
  padding: 25px;
}
#app {
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  max-width: 1600px;
  position: relative;
}
.header {
  background-image: url("~@/images/header.png");
  background-size: cover;
  background-position-y: center;
  background-position-x: right;
  height: 300px;
  position: relative;
  width: 100%;
  .title {
    position: absolute;
    bottom: 15px;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    left: 15px;
    z-index: 1;
  }
  .overlay {
    background-color: rgb(62, 163, 62);
    height: 100%;
    width: 100%;
    opacity: 0.7;
  }
}
.product-grid {
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
