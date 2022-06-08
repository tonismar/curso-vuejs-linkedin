<template>
  <div class="grid-wrap">
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <CartListItem 
        v-for="item in cartItems" 
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        :key="item.id" :item="item" 
      />
      <h3 id="total-price">Total: ${{ totalPrice }}</h3>
      <button id="checkout-button">Proceed to Checkout</button>
    </div>
    <p v-else>The cart is empty!</p>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  props: ["cartItems"],
  components: {
    CartListItem,
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    },
  },
};
</script>

<style croped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>