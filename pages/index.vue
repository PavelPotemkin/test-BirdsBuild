<script setup lang="ts">
import { reactive, useFetch } from '#imports'
import type { Product } from '~/components/product/card/Index.vue'
import { apiUrls } from '~/api/urls'
import 'virtual:svg-icons-register'

const tabs = reactive({
  value: '',
  name: 'test-tab',
  items: [{
    value: 'all-types',
    name: 'Все типы'
  }, {
    value: 'direct-sales',
    name: 'Прямые продажи'
  }, {
    value: 'auction',
    name: 'Аукцион'
  }]
})

const {
  data: products,
  pending: isLoading
} = await useFetch<Product[]>(apiUrls.products)

</script>

<template>
  <main>
    <BaseIcon name="bag" width="16" height="14" />
    <BaseIcon name="box" class="fill-accent-1" />

    <BaseTabs
      v-model="tabs.value"
      :items="tabs.items"
      :name="tabs.name"
    />

    <div v-if="isLoading">
      loading
    </div>

    <template v-else>
      <ProductList :products="products" />
    </template>
  </main>
</template>
