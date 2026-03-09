<template>
  <div class="slidev-layout logos-two-panels">
    <div class="logos-two-panels-header">
      <slot name="default" />
    </div>
    <div class="logos-two-panels-container">
      <div class="logos-col logos-col-left">
        <slot name="left" />
      </div>
      <div class="logos-col logos-col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logos-two-panels {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 3rem;
  position: relative;
}

.logos-two-panels-header {
  margin-bottom: 1rem;
}

.logos-two-panels-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  flex: 1;
}

.logos-col {
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logos-two-panels :deep(p) {
  font-size: 1.6rem;
}

</style>
