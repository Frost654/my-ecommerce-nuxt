<template>
    <div class="product-details">
      <button @click="goBack" class="mb-4  hover:underline">
        Back to Products
      </button>
      <div v-if="product">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <img
          :src="product.thumbnail"
          alt="Product Image"
          class="w-full h-64 object-cover rounded mb-4"
        />
        <p class="text-lg">Price: ${{ product.price }}</p>
        <p class="text-gray-700">{{ product.description }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null
      };
    },
    created() {
      this.fetchProduct();
    },
    methods: {
      async fetchProduct() {
        const productId = this.$route.params.id;
        try {
          const response = await fetch(
            `https://dummyjson.com/products/${productId}`
          );
          const data = await response.json();
          this.product = data;
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      },
      goBack() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .product-details {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  