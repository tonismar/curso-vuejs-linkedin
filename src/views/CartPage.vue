<template>
  <div id="page-wrap">
    <CartList :cartItems="cartItems" />
  </div>
</template>

<script>
import { cartItems } from "../fake-data";
import CartList from "../components/CartList.vue";

export default {
  name: "CartPage",
  components: {
    CartList,
  },
  data() {
    return {
      cartItems,
    };
  },
};
</script>