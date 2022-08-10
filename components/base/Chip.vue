<template>
  <p class="chip">
    <slot />
  </p>
</template>

<style scoped>
.chip {
  width: fit-content;
  padding: 8px;
  background-color: var(--white-gray);
  border-radius: 5px;
}

</style>
