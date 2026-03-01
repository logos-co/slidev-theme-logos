<template>
  <div class="slidev-layout logos-default">
    <div class="logos-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.logos-default {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--screen-margin);
  position: relative;
}

.logos-content {
  flex: 1;
  margin-top: 0.5rem;
}

.logos-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.25rem;
}

h1 {
  font-size: 3.8rem;
  font-weight: 100 !important;
  line-height: 1.15;
  margin-bottom: 0.25rem;
}

</style>
