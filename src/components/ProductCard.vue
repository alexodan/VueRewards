<template>
  <div
    class="card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div>
      <img :src="product.image" :alt="product.name" />
    </div>
    <h3>{{ product.name }}</h3>
    <span>{{ product.price }}</span>
    <button @click="redeem">Redeem</button>
    <div class="reverse-card" v-if="isHovered">
      <div class="content">
        <p>{{ balance }}</p>
        <p>-{{ product.price }}</p>
        <p class="total">{{ balance - product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: null,
    };
  },
  mounted() {
    console.log("product:", this.product);
  },
  props: ["product", "balance"],
  methods: {
    redeem() {
      this.$emit("redeem", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;
  min-height: 200px;
  position: relative;
  button {
    background-color: rgb(37, 157, 37);
    color: white;
  }
}
.reverse-card {
  background-color: rgb(33, 167, 33);
  font-weight: bold;
  font-size: 1.6rem;
  height: calc(100% + 20px);
  left: -10px;
  opacity: 0.8;
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
  .total {
    border-top: 2px solid white;
  }
}
</style>