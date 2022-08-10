<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import useThrottle from '~/composible/useThrottle'
import { computed } from '#imports'

interface Props {
  price: number
  count: number
  status: string
  favorite: boolean
  deal: boolean
  payed: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'fav'): void
  (e: 'deal'): void
  (e: 'pay'): void
}>()

const fullPrice = (props.price * props.count).toLocaleString('ru')

const listData = [{
  name: 'Количество',
  value: `${props.count} шт.`
}, {
  name: 'Стоимость за штуку',
  value: `${props.price.toLocaleString('ru')} ₽`
}]

const isFav = computed(() => props.favorite)
const isDeal = computed(() => props.deal)
const isPayed = computed(() => props.payed)

const favBtnType = computed(() => isFav.value ? 'secondary' : 'primary')

const favHandle = useThrottle(() => {
  emit('fav')
})

const dealHandle = useThrottle(() => {
  emit('deal')
})

const payHandle = useThrottle(() => {
  emit('pay')
})

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
      <template v-if="isPayed">
        <BaseButton
          wide
          size="sm"
          disabled
        >
          Оплачено
        </BaseButton>
      </template>

      <template v-else>
        <BaseButton
          v-if="isDeal"
          type="thirdly"
          wide
          size="sm"
          @click="payHandle"
        >
          Оплатить
        </BaseButton>

        <BaseButton
          v-else
          wide
          @click="dealHandle"
        >
          Добавить в сделки
        </BaseButton>

        <BaseButton
          :type="favBtnType"
          @click="favHandle"
        >
          <BaseIcon name="fav" width="16" height="14" />
        </BaseButton>
      </template>
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
