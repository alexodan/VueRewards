<template>
  <div class="card" @click="toggleReverse">
    <div>
      <img :src="product.image" :alt="product.name" />
    </div>
    <h3>{{ product.name }}</h3>
    <span>{{ product.price }}</span>
    <div class="reverse-card" v-if="isVisible">
      <div class="content">
        <p>{{ balance }}</p>
        <p>-{{ product.price }}</p>
        <p class="total">{{ balance - product.price }}</p>
        <button @click="redeem">Redeem Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: null,
    };
  },
  mounted() {
    console.log("product:", this.product);
  },
  props: ["product", "balance"],
  methods: {
    redeem(evt) {
      evt.stopPropagation();
      this.$emit("redeem", this.product);
    },
    toggleReverse() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  background-color: white;
  /* -webkit-box-shadow: 0px 0px 1px 1px rgba(230, 230, 230, 1);
  -moz-box-shadow: 0px 0px 1px 1px rgb(230, 230, 230);
  box-shadow: 0px 0px 1px 1px rgba(230, 230, 230, 1); */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;
  min-height: 200px;
  position: relative;
  &:hover {
    border: 1px solid rgb(37, 157, 37);
    transform: scale(1.01);
    transition: 0.5s ease-out;
  }
}
.reverse-card {
  background-color: rgb(33, 167, 33);
  font-weight: bold;
  font-size: 1.6rem;
  height: calc(100% + 20px);
  left: -10px;
  opacity: 0.95;
  position: absolute;
  top: -10px;
  width: calc(100% + 20px);
  .content {
    color: white;
    left: 50%;
    position: absolute;
    text-align: right;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  .content button {
    background-color: white;
    border: none;
    border-radius: 25px;
    color: rgb(37, 157, 37);
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 10px;
    text-transform: uppercase;
    width: 150px;
  }
  .total {
    border-top: 2px solid white;
  }
}
</style>