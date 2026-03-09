<template>
  <div class="slidev-layout logos-panel">
    <div class="left">
      <slot />
    </div>
    <div class="right">
      <slot name="panel" />
    </div>
  </div>
</template>

<style scoped>
.logos-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 0.5rem;
}

.left :deep(h1) {
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.left :deep(p) {
  font-size: 0.8rem;
  line-height: 1.5;
}

.right {
  overflow: hidden;
}

.right :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>