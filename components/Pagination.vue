<template>
    <div class="flex justify-center mt-4">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="bg-gray-300 p-2 rounded-l disabled:bg-gray-200"
      >
        Previous
      </button>
      <span class="p-2">{{ currentPage }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-gray-300 p-2 rounded-r disabled:bg-gray-200"
      >
        Next
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps } from 'vue';
  
  const props = defineProps({
    currentPage: Number,
    totalPages: Number,
  });
  
  const emit = defineEmits(['updatePage']);
  
  function previousPage() {
    if (props.currentPage > 1) {
      emit('updatePage', props.currentPage - 1);
    }
  }
  
  function nextPage() {
    if (props.currentPage < props.totalPages) {
      emit('updatePage', props.currentPage + 1);
    }
  }
  </script>
  
  <style scoped>
  /* Add custom styles for pagination */
  </style>
  