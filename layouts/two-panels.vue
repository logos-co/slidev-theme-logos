<template>
  <div class="slidev-layout logos-left-right-2">
    <div class="left">
      <slot />
    </div>
    <div class="right">
      <div class="panel"><slot name="panel-1" /></div>
      <div class="panel"><slot name="panel-2" /></div>
    </div>
  </div>
</template>

<style scoped>
.logos-left-right-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 1.75rem 1.75rem 5rem 0;
  overflow: hidden;
}

.panel {
  overflow: auto;
}

.panel :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>