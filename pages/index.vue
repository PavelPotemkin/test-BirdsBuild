<script setup lang="ts">
import { useProductStore } from '~/stores/product'

const store = useProductStore()
</script>

<template>
  <ProductCatalog
    :products="store.stock"
  />
</template>
