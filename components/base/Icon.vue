<script setup lang="ts">
import { computed } from '#imports'

interface Props {
  prefix?: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
