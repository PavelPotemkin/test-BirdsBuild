<script setup lang="ts">
import { reactive, useFetch } from '#imports'
import type { Product } from '~/components/product/card/Index.vue'
import { apiUrls } from '~/api/urls'

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
    <BaseTabs
      v-model="tabs.value"
      :items="tabs.items"
      :name="tabs.name"
    />

    <!--    <BaseButton>-->
    <!--      Оплатить-->
    <!--    </BaseButton>-->

    <!--    <BaseButton type="secondary">-->
    <!--      Оплатить-->
    <!--    </BaseButton>-->

    <!--    <BaseButton>-->
    <!--      <IconFav width="16" height="14" />-->
    <!--    </BaseButton>-->

    <!--    <BaseButton type="thirdly" size="sm">-->
    <!--      <IconSearch width="14" height="14" />-->
    <!--    </BaseButton>-->

    <div v-if="isLoading">
      loading
    </div>

    <template v-else>
      <ProductCard
        v-for="product in products"
        v-bind="product"
        :key="product.name"
      />
    </template>
  </main>
</template>
