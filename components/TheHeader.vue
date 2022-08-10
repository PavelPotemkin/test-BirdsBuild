<template>
  <header class="header">
    <div class="header__line" />

    <div class="header__inner">
      hello
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
  background: var(--platinum);
  border-radius: 0 0 10px 10px;
}

.header__inner {
  display: flex;
  justify-content: end;
}
</style>
