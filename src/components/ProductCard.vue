<template>
  <div class="card" @click="toggleReverse">
    <div class="content">
      <img class="image" :src="product.image" :alt="product.title" />
      <hr class="separator" />
      <h4 v-trim>{{ product.title }}</h4>
      <span class="price">{{ product.price }} 💰</span>
    </div>
    <div class="reverse-card" v-if="isVisible">
      <div class="content">
        <p>{{ balance }}</p>
        <p>-{{ product.price }}</p>
        <p class="total">{{ balance - product.price }}💰</p>
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
  directives: {
    trim: {
      mounted(el, binding, vnode) {
        el.textContent =
          el.textContent.length > 22
            ? el.textContent.substr(0, 22) + "..."
            : el.textContent;
      },
    },
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
  border: 1px solid white;
  /* -webkit-box-shadow: 0px 0px 1px 1px rgba(230, 230, 230, 1);
  -moz-box-shadow: 0px 0px 1px 1px rgb(230, 230, 230);
  box-shadow: 0px 0px 1px 1px rgba(230, 230, 230, 1); */
  cursor: pointer;
  min-width: 200px;
  min-height: 200px;
  padding: 15px;
  position: relative;
  &:hover {
    border: 1px solid rgb(33, 167, 33);
    /* transform: scale(1.01); */
    transition: 0.5s ease-out;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  .content .image {
    width: 100%;
    height: 180px;
  }
  .content .price {
    /* background-color: white; */
    background-color: rgb(62, 163, 62);
    /* border: 1px solid rgb(62, 163, 62); */
    border-radius: 15px;
    /* color: rgb(62, 163, 62); */
    color: white;
    font-weight: 500;
    padding: 5px 10px;
    position: absolute;
    right: 10px;
    top: 10px;
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
    display: block;
    height: auto;
    left: 50%;
    position: absolute;
    text-align: center;
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
    margin-top: 20px;
    padding: 10px;
    text-transform: uppercase;
    width: 150px;
  }
  .total {
    border-top: 2px solid white;
  }
}
.separator {
  border-top: 1px solid #e9ebf1;
  height: 1px;
  margin: 10px;
}
</style>