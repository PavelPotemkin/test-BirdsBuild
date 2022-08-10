<script setup lang="ts">
import type { Product } from '~/components/product/card/Index.vue'

interface Props {
  products: Product[]
}

defineProps<Props>()
</script>

<template>
  <section class="product-list">
    <ProductCard
      v-for="product in products"
      v-bind="product"
      :key="product.name"
    />
  </section>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
