<script setup lang="ts">
import { TabItem } from '~/components/base/Tab.vue'

export interface Tabs<T = string> {
  modelValue: T | null
  name: string
  items: TabItem<T>[]
}

const props = defineProps<Tabs>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="tabs">
    <BaseTab
      v-for="item in items"
      :key="item.value"
      v-model="model"
      :value="item.value"
      :name="name"
    >
      {{ item.name }}
    </BaseTab>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 12px;
  padding: 12px;
  width: fit-content;
  background-color: var(--white-gray);
  border: 1px solid var(--platinum);
  border-radius: 10px;
}
</style>
