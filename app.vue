<script setup lang="ts">
import type { Product } from '~/components/product/card/Index.vue'
import { useProductStore } from '~/stores/product'
import productsJson from '@/public/products.json'

// fetch from servet
// const { data: products } = await useFetch<(Omit<Product, 'payed' | 'deal'>)[]>(apiUrls.products)

const filledProducts: Product[] = (productsJson as unknown as {
  products: (Omit<Product, 'payed' | 'deal'>)[]
}).products.map(p => ({
  ...p,
  deal: false,
  payed: false
}))

const { initProducts } = useProductStore()

initProducts({
  stock: [...filledProducts]
})

</script>

<template>
  <TheHeader />

  <NuxtPage />
</template>
