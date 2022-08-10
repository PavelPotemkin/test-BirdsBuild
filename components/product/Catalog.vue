<script setup lang="ts">
import type { Product } from '~/components/product/card/Index.vue'
import { computed, reactive, ref } from '#imports'
import { Tabs } from '~/components/base/Tabs.vue'

type TabValue = 'all-types' | 'direct-sales' | 'auction'

interface Props {
  products: Product[]
  useSearch?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  useSearch: false
})

const tabs = reactive<Tabs<TabValue>>({
  modelValue: null,
  name: 'catalog-tab',
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

tabs.modelValue = tabs.items[0].value

const search = ref('')

const onSearchChange = (value: string) => {
  search.value = value
}

const products = computed(() => {
  if (!search.value) {
    return props.products
  }

  return props.products.filter(p => p.name.includes(search.value))
})

const directSales = computed(() => {
  return products.value.filter(p => p.type === 'Прямые продажи')
})

const auction = computed(() => {
  return products.value.filter(p => p.type === 'Аукцион')
})

const activeProducts = computed(() => {
  switch (tabs.modelValue) {
    case 'all-types':
      return products.value
    case 'auction':
      return auction.value
    case 'direct-sales':
      return directSales.value
    default:
      return null
  }
})

</script>

<template>
  <main class="container product-catalog-wrapper">
    <div v-if="loading">
      loading
    </div>

    <template v-else-if="activeProducts">
      <section class="product-catalog">
        <div class="product-catalog__controls">
          <BaseTabs
            v-model="tabs.modelValue"
            :items="tabs.items"
            :name="tabs.name"
          />

          <BaseSearch
            placeholder="Введите текст"
            @change="onSearchChange"
          />
        </div>

        <template v-if="activeProducts && activeProducts.length">
          <ProductList
            v-if="activeProducts && activeProducts.length"
            :products="activeProducts"
          />
        </template>

        <template v-else>
          <p class="text-l text-accent-1">
            Нет подходящих товаров
          </p>
        </template>
      </section>
    </template>
  </main>
</template>

<style scoped>
.product-catalog-wrapper {
  padding-top: 77px;
}

.product-catalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.product-catalog__controls {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
