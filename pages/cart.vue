<template>
    <div class="cart">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="mb-4 p-4 border rounded">
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <p class="text-gray-700">Price: ${{ item.price }}</p>
          <button @click="removeFromCart(item.id)" class="text-red-500 hover:underline">
            Remove from Cart
          </button>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['cartItems'])
    },
    methods: {
      ...mapActions(['removeProductFromCart']),
      removeFromCart(productId) {
        this.removeProductFromCart(productId)
      }
    }
  }
  </script>
  
  <style scoped>
  .cart {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  