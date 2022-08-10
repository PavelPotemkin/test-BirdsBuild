<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import { computed } from '#imports'

interface Props {
  modelValue: string
  value: string
  name: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const model = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emit('update:modelValue', value)
  }
})

const onSelect = () => {
  model.value = props.value
}

const onFocus = () => {
  emit('focus')
}

const onBlur = () => {
  emit('blur')
}

const isActive = computed(() => props.modelValue === props.value)
</script>

<template>
  <label
    tabindex="0"
    @keydown.enter="onSelect"
    @keydown.space="onSelect"
  >
    <input
      :value="value"
      :name="name"
      type="radio"
      class="sr-only"
      tabindex="-1"
      @input="onSelect"
      @focus="onFocus"
      @blur="onBlur"
    >

    <slot name="default" v-bind="{ isActive }" />
  </label>
</template>
