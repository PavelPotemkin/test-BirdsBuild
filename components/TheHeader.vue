<script setup lang="ts">
import { ref } from '#imports'
import { NavItem } from '~/components/header/NavItem.vue'

const navItems = ref<NavItem[]>([{
  title: 'Избранное',
  link: '/favorites',
  icon: 'fav'
}, {
  title: 'Склад',
  link: '/',
  icon: 'box'
}, {
  title: 'Сделки',
  link: '/deals',
  icon: 'bag'
}])
</script>

<template>
  <header class="header container">
    <div class="header__line" />

    <div class="header__inner">
      <HeaderNavItem
        v-for="navItem in navItems"
        :key="navItem.title"
        v-bind="navItem"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header__line {
  height: 40px;
  background: var(--platinum);
  border-radius: 0 0 10px 10px;
}

.header__inner {
  display: flex;
  justify-content: flex-end;
}
</style>
