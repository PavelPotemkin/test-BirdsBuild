<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'

interface Props {
  type: 'Аукцион' | 'Прямые продажи' | 'Прямы продажи'
  name: string
  city: string
  seller: string
  category: string
  description: string
  image: string
}

defineProps<Props>()

</script>

<template>
  <div class="product-card-info">
    <div class="product-card-info__inner">
      <img :src="image" :alt="name" class="product-card-info__img">

      <div class="product-card-info__content">
        <p class="product-card-info__type text-accent-2 text">
          {{ type }}
        </p>

        <p class="product-card-info__name text-accent-1 title-m-v2">
          {{ name }}
        </p>

        <BaseChip class="product-card-info__city">
          <IconLocation class="fill-accent-2" width="10" height="14" />

          <span class="text-m text-accent-3">
            {{ city }}
          </span>
        </BaseChip>

        <p class="product-card-info__seller">
          <span class="text-accent-2 text">
            Продавец
          </span>

          <span class="text-accent-1 text-m">
            {{ seller }}
          </span>
        </p>

        <BaseChip class="product-card-info__category">
          <span class="text-accent-2 text">
            Вид товара
          </span>

          <span class="text-accent-3 text">
            {{ category }}
          </span>
        </BaseChip>

        <p class="product-card-info__description text-accent-1 title-m-v3">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card-info {
  padding-bottom: 60px;
}

.product-card-info__img {
  width: 256px;
  height: 256px;
  object-fit: contain;
  border-radius: 15px;
}

.product-card-info__inner {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.product-card-info__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-card-info__type {
  margin-bottom: 4px;
}

.product-card-info__name {
  margin-bottom: 18px;
}

.product-card-info__city {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.product-card-info__seller {
  display: flex;
  gap: 4px;
}

.product-card-info__category {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-card-info__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
