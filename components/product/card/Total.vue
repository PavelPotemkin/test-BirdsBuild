<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import useThrottle from '~/composible/useThrottle'
import { computed } from '#imports'

interface Props {
  price: number
  count: number
  status: string
  favorite: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'favAdd'): void
  (e: 'dealAdd'): void
  (e: 'pay'): void
}>()

const fullPrice = props.price * props.count

const listData = [{
  name: 'Количество',
  value: `${props.count} шт.`
}, {
  name: 'Стоимость за штуку',
  value: `${props.price} ₽`
}]

const fav = useThrottle(() => {
  emit('favAdd')
})

const deal = useThrottle(() => {
  emit('dealAdd')
})

const pay = useThrottle(() => {
  emit('pay')
})

const shouldPay = computed(() => props.favorite)

const favBtnType = computed(() => props.favorite ? 'secondary' : 'primary')
</script>

<template>
  <div class="product-card-total">
    <div>
      <p class="title-xl">
        {{ fullPrice }}
      </p>

      <ul class="product-card-total__list">
        <li
          v-for="listItem in listData"
          :key="listItem.value"
          class="product-card-total__item"
        >
          <span class="text-m text-accent-2">
            {{ listItem.name }}
          </span>

          <span class="text-m text-accent-1">
            {{ listItem.value }}
          </span>
        </li>
      </ul>
    </div>

    <div class="product-card-total__footer">
      <BaseButton
        v-if="shouldPay"
        type="thirdly"
        wide
        @click="pay"
      >
        Оплатить
      </BaseButton>

      <BaseButton
        v-else
        wide
        @click="deal"
      >
        Добавить в сделки
      </BaseButton>

      <BaseButton
        :type="favBtnType"
        @click="fav"
      >
        <BaseIcon name="fav" width="16" height="14" />
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.product-card-total {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  color: var(--blue-dark)
}

.product-card-total__list {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.product-card-total__item {
  display: flex;
  justify-content: space-between;
}

.product-card-total__item:first-child {
  color: var(--manatee)
}

.product-card-total__footer {
  display: flex;
  gap: 12px;
  margin-top: auto;
}
</style>
