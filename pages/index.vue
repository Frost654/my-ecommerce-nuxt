<template>
    <div>
      <SearchBar @search="applySearch" />
      <ProductFilters @filter="applyFilters" />
      <ProductSort @sort="applySort" />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 display-wrapped">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @updatePage="fetchProducts"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import ProductCard from '~/components/ProductCard.vue';
  import ProductFilters from '~/components/ProductFilters.vue';
  import ProductSort from '~/components/ProductSort.vue';
  import SearchBar from '~/components/SearchBar.vue';
  import Pagination from '~/components/Pagination.vue';
  
  const products = ref([]);
  const filteredProducts = computed(() => {
    let result = products.value;
  
    // Apply any filters here if needed

  
    return result;
  });
  
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return filteredProducts.value;
  });
  
  const currentPage = ref(1);
  const totalPages = ref(1);
  const perPage = 10; // Number of products per page
  
  function fetchProducts(page = 1) {
    fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${(page - 1) * perPage}`)
      .then(response => response.json())
      .then(data => {
        products.value = data.products;
        totalPages.value = Math.ceil(data.total / perPage);
        currentPage.value = page;
      })
      .catch(error => console.error('Error fetching products:', error));
  }
  function fetchAllProducts(newFilters) {
    fetch('https://dummyjson.com/products?limit=0')
      .then(response => response.json())
      .then(data => {
        products.value = data.products;
        totalPages.value = Math.ceil(data.total / perPage);
        currentPage.value = 1;
        if (newFilters.category === '') {
   // filteredProducts.value = products.value; // No filter, show all products
   products.value = products.value.filter(
      product => product.price>newFilters?.minPrice && product.price<newFilters?.maxPrice
    );
  } else {
    products.value = products.value.filter(
      product => product.category.toLowerCase() === newFilters.category.slug.toLowerCase()
    );
  }
      })
      .catch(error => console.error('Error fetching products:', error));
  }
  
  function applyFilters(newFilters) {
    // Apply filters and refetch products if needed
 
  updatePage(1,newFilters); // Reset to first page
  }
  
  function applySort(newSort) {
    // Apply sorting and refetch products if needed
    fetchSortedProducts(newSort);
  }
  function viewProduct() {
    this.$router.push(`/product/${id}`);
      }
  
  function applySearch(query) {
    // Apply search logic and refetch products if needed
    searchedProducts(query);
  }

  function searchedProducts(query){
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=${perPage}&skip=${(1 - 1) * perPage}`)
      .then(response => response.json())
      .then(data => {
        products.value = data.products;
        totalPages.value = Math.ceil(data.total / perPage);
      //  currentPage.value = page;
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  function fetchSortedProducts(sortBy){
    fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=asc&limit=${perPage}&skip=${(1 - 1) * perPage}`)
      .then(response => response.json())
      .then(data => {
        products.value = data.products;
        totalPages.value = Math.ceil(data.total / perPage);
      //  currentPage.value = page;
      })
      .catch(error => console.error('Error fetching products:', error));
  }
  
  function updatePage(newPage,newFilters) {
    currentPage.value = newPage;
    fetchAllProducts(newFilters);
  }
  
  onMounted(() => fetchProducts());
  </script>
  
  <style scoped>
  /* Scoped styles if needed */
  </style>
  