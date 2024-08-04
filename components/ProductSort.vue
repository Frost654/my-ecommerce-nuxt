<template>
    <div class="bg-white p-4 shadow-md rounded-lg">
      <h3 class="text-lg font-semibold mb-4">Sort By</h3>
      <select v-model="selectedSort" @change="applySort" class="w-full p-2 border rounded">
        <option value="price">Price</option>
        <option value="title">Name</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </template>
  
  <script setup>
  const selectedSort = ref('price');
  
  const emit = defineEmits(['sort']);
  
  function applySort() {
    emit('sort', selectedSort.value);
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  