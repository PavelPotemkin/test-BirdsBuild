<script setup lang="ts">
import { ref } from '#imports'
import useDebounce from '~/composible/useDebounce'

interface Props {
  placeholder: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const input = ref('')

const submit = useDebounce(() => {
  console.log('submit')
  emit('change', input.value)
})
</script>

<template>
  <form class="search-form" @submit.prevent="submit">
    <input
      v-model="input"
      :placeholder="placeholder"
      class="search-form__input text-l text-accent-1"
      type="text"
    >

    <BaseButton
      type="secondary"
      size="sm"
      @click="submit"
    >
      <BaseIcon
        name="search"
        width="15"
        height="15"
      />
    </BaseButton>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  padding: 4px 4px 4px 16px;
  background: var(--white);
  border: 1px solid var(--platinum);
  border-radius: 10px;
}

.search-form__input::placeholder {
  color: var(--manatee);
}
</style>
