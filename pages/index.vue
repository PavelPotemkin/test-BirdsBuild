<script setup lang="ts">
import { useFetch } from '#imports'
import type { Product } from '~/components/product/card/Index.vue'
import { apiUrls } from '~/api/urls'

const {
  data: products,
  pending: isLoading
} = await useFetch<Product[]>(apiUrls.products)

</script>

<template>
  <ProductCatalog
    :loading="isLoading"
    :products="products"
  />
</template>

<style scoped>
.main-page {

}
</style>
