<template>
    <div class="bg-white p-4 shadow-md rounded-lg">
      <input
        v-model="searchQuery"
        @input="applySearch"
        type="text"
        placeholder="Search products..."
        class="w-full p-2 border rounded"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      applySearch() {
        this.$emit('search', this.searchQuery);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  