<template>
  <div id="app">
    <!-- <input type="number" v-model.number="step" />
    <button @click="increment">+</button>
    <span>Counter: {{ count }}</span> -->
    <hr />
    <div class="balance">
      Balance:
      <span>{{ balance }}</span>
    </div>
    <span class="product-grid">
      <product-card
        :key="product._id"
        v-for="product in products"
        :product="product"
        :balance="balance"
        @redeem="redeemProduct"
      ></product-card>
    </span>
    <!-- <game></game> -->
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import Game from "./components/Game.vue";
import { getProducts } from "./api/mocks";

export default {
  name: "App",
  components: {
    ProductCard,
    Game,
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
    count(newCount) {
      if (newCount > 20) {
        setTimeout(() => {
          // if this wasn't an arrow function 'this' would refer to the window object.
          this.count = 0;
        }, 1000);
      }
    },
    balance(newBalance) {
      console.log("New Balance:", newBalance);
    },
  },
  methods: {
    increment() {
      this.count += this.step;
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
}
</style>
