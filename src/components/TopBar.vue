<template>
  <div class="container">
    <div class="logo">Vue icon</div>
    <di class="balance">
      <span>{{ balance }} 💰</span>
    </di>
  </div>
</template>

<script>
export default {
  props: ["balance"],
};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 20px;
}
.balance {
  background-color: #e9ebf1;
  border-radius: 20px;
  color: #616161;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px 10px;
}
</style>