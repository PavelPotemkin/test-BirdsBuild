<script setup lang="ts">
export interface NavItem {
  title: string
  icon: string
  link: string
}

defineProps<NavItem>()
</script>

<template>
  <NuxtLink :to="link" class="nav-item">
    <BaseIcon
      class="fill-accent-1"
      :name="icon"
      width="20"
      height="20"
    />

    <span class="title-s text-accent-1">
      {{ title }}
    </span>
  </NuxtLink>
</template>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 50px;
  min-width: 86px;
  background-color: var(--white);
}

.nav-item:hover {
  background-color: var(--white-gray);
}

.nav-item.router-link-active {
  background-color: var(--white-gray);
}
</style>
