<template>
    <div class="bg-white p-4 shadow-md rounded-lg">
      <img :src="product.thumbnail" alt="Product Image" class="mb-4 w-full h-48 object-cover rounded" />
      <h3 @click="viewProduct" class="text-lg font-semibold cursor-pointer text-blue-500 hover:underline">
        {{ product.title }}
      </h3>
      <p class="text-gray-700">Price: ${{ product.price }}</p>
      <button @click="addToCart(product)" class="mt-2 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
    ...mapGetters(['cartItems']),
  },
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      viewProduct() {
        this.$router.push(`/products/${this.product.id}`);
      },
    addToCart(product) {
        this.$store.dispatch('addToCart', product);
    },
    removeFromCart(productId) {
      this.removeProductFromCart(productId)
    },
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  