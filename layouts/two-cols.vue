<template>
  <div class="slidev-layout logos-two-cols">
    <div class="logos-two-cols-header">
      <slot name="default" />
    </div>
    <div class="logos-two-cols-container">
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
.logos-two-cols {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 3rem;
  position: relative;
}

.logos-two-cols-header {
  margin-bottom: 1rem;
}

.logos-two-cols-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  flex: 1;
}

.logos-col {
  overflow: auto;
}


</style>
