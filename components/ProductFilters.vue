<template>
    <div class="bg-white p-4 shadow-md rounded-lg displayFiltersWithSpace">
      <h3 class="text-lg font-semibold mb-4">Filters</h3>
      
      <!-- Category Filter -->
      <div class="mb-4">
        <label for="category" class="block text-gray-700">Category</label>
        <select id="category" v-model="selectedCategory" @change="applyFilters" class="w-full p-2 border rounded">
          <option value="">All Categories</option>
          <option v-for="(category, index) in categories" :key="index" :value="category">
            {{ category.slug }}
          </option>
        </select>
      </div>
      
      <!-- Price Filter -->
      <div class="mb-4">
        <label for="price" class="block text-gray-700">Price Range</label>
        <input type="number" v-model.number="minPrice" placeholder="Min Price" @input="applyFilters" class="w-full p-2 border rounded mb-2" />
        <input type="number" v-model.number="maxPrice" placeholder="Max Price" @input="applyFilters" class="w-full p-2 border rounded" />
      </div>
  
      <!-- Brand Filter -->
      <div class="mb-4">
        <label for="brand" class="block text-gray-700">Brand</label>
        <select id="brand" v-model="selectedBrand" @change="applyFilters" class="w-full p-2 border rounded">
          <option value="">All Brands</option>
          <option v-for="(brand, index) in brands" :key="index" :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductFilters',
    data() {
      return {
        categories: [],  // Categories fetched from API
        brands: ['Brand A', 'Brand B', 'Brand C'], // Example static brands
        selectedCategory: '',
        minPrice: 0,
        maxPrice: 0,
        selectedBrand: ''
      };
    },
    emits: ['filter'],
    mounted() {
      this.fetchCategories();
    },
    methods: {
      fetchCategories() {
        fetch('https://dummyjson.com/products/categories')
          .then(response => response.json())
          .then(data => {
            this.categories = data;
          })
          .catch(error => console.error('Error fetching categories:', error));
      },
      applyFilters() {
        this.$emit('filter', {
          category: this.selectedCategory,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          brand: this.selectedBrand
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  