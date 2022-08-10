<script setup lang="ts">
import { useFetch } from '#imports'
import type { Product } from '~/components/product/card/Index.vue'
import { apiUrls } from '~/api/urls'
import { useProductStore } from '~/stores/product'

const { data: products } = await useFetch<(Omit<Product, 'payed' | 'deal'>)[]>(apiUrls.products)

const filledProducts: Product[] = products.value.map(p => ({
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
