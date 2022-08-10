<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'

export interface Product {
  id: number,
  type: 'Аукцион' | 'Прямые продажи'
  name: string
  city: string
  seller: string
  category: string
  description: string
  price: number
  count: number
  image: string
  status: string
  favorite: boolean
}

defineProps<Product>()

const favAdd = () => {
  // console.log('favAdd')
}

const dealAdd = () => {
  // console.log('dealAdd')
}

const pay = () => {
  // console.log('pay')
}

</script>

<template>
  <div class="product-card">
    <ProductCardInfo
      class="product-card__info"
      :type="type"
      :name="name"
      :city="city"
      :seller="seller"
      :category="category"
      :description="description"
      :image="image"
    />

    <ProductCardTotal
      class="product-card__total"
      :price="price"
      :count="count"
      :status="status"
      :favorite="favorite"
      @favAdd="favAdd"
      @dealAdd="dealAdd"
      @pay="pay"
    />
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  background-color: var(--white);
  border: 1px solid var(--platinum);
  border-radius: 20px;
}

.product-card__info {
  flex-grow: 1;
}

.product-card__total {
  min-width: 314px;
  border-left: 1px solid var(--platinum);
  border-radius: 20px;
}
</style>
