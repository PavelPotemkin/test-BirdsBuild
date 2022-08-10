<script setup lang="ts">
import { computed } from '#imports'

interface Props {
  type?: 'secondary' | 'primary' | 'thirdly'
  size?: 'sm' | 'md'
  wide?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'md',
  wide: false
})

const classObj = computed(() => ({
  [`btn_type_${props.type}`]: true,
  [`btn_size_${props.size}`]: true,
  btn_wide: props.wide,
  btn_disabled: !!props.disabled
}))
</script>

<template>
  <button
    type="button"
    class="btn title-m"
    :class="classObj"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
}

.btn_type_primary {
  color: var(--blue-dark);
  fill: var(--blue-dark);
  background-color: var(--white-gray);
}

.btn_type_secondary {
  color: var(--white);
  fill: var(--white);
  background-color: var(--blue-dark);
}

.btn_type_thirdly {
  color: var(--white);
  fill: var(--white);
  background-color: var(--green);
}

.btn_size_sm {
  min-height: 40px;
  min-width: 40px;
}

.btn_size_md {
  min-height: 50px;
  min-width: 50px;
}

.btn_wide {
  width: 100%;
}

.btn_disabled {
  border-color: var(--platinum);
  color: var(--manatee);
}
</style>
