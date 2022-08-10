<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import { computed } from '#imports'

export interface TabItem<T = string> {
  name: string
  value: T
}

interface Props {
  modelValue: TabItem['value']
  name: TabItem['name']
  value: string
}

const props = defineProps<Props>()

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
  <BaseSwitchItem
    v-model="model"
    :value="value"
    :name="name"
  >
    <template #default="{ isActive }">
      <span
        class="tab text-l"
        :class="{ 'tab_active': isActive }"
      >
        <slot />
      </span>
    </template>
  </BaseSwitchItem>
</template>

<style scoped>
.tab {
  color: var(--manatee);
  cursor: pointer;
}

.tab_active {
  color: var(--blue-dark);
}
</style>
