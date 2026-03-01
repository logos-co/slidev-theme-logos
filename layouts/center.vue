<template>
  <div class="slidev-layout logos-center">
    <div class="logos-center-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.logos-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0rem !important;
  position: relative;
}

.logos-page-number {
  font-size: 0.75rem;
  color: var(--logos-grey-04);
}
</style>
