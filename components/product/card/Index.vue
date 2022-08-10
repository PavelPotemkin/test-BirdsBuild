<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import { DealsStorageName, FavoritesStorageName, useProductStore } from '~/stores/product'

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
  deal: boolean
  payed: boolean
}

const props = defineProps<{
  product: Product
}>()

const { add, remove, pay } = useProductStore()

const favHandle = () => {
  const favStorageName: FavoritesStorageName = 'favorites'

  if (props.product.favorite) {
    remove(favStorageName, props.product)
  } else {
    add(favStorageName, props.product)
  }
}

const dealHandle = () => {
  const dealStorageName: DealsStorageName = 'deals'

  if (props.product.deal) {
    remove(dealStorageName, props.product)
  } else {
    add(dealStorageName, props.product)
  }
}

const tryPay = async () => {
  try {
    await pay(props.product)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e)
  }
}

const payHandle = async () => {
  await tryPay()
}

</script>

<template>
  <div class="product-card">
    <ProductCardInfo
      class="product-card__info"
      :type="product.type"
      :name="product.name"
      :city="product.city"
      :seller="product.seller"
      :category="product.category"
      :description="product.description"
      :image="product.image"
    />

    <ProductCardTotal
      class="product-card__total"
      :price="product.price"
      :count="product.count"
      :status="product.status"
      :favorite="product.favorite"
      :deal="product.deal"
      :payed="product.payed"
      @fav="favHandle"
      @deal="dealHandle"
      @pay="payHandle"
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
