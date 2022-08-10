<script setup lang="ts">
import { reactive } from '#imports'

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
</script>

<template>
  <main>
    «Склад»

    <BaseTabs
      v-model="tabs.value"
      :items="tabs.items"
      :name="tabs.name"
    />

    <BaseButton>
      Оплатить
    </BaseButton>

    <BaseButton type="secondary">
      Оплатить
    </BaseButton>

    <BaseButton>
      <IconFav width="16" height="14" />
    </BaseButton>

    <BaseButton type="thirdly" size="sm">
      <IconSearch width="14" height="14" />
    </BaseButton>
  </main>
</template>
