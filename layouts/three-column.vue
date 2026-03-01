<script setup>
import Header from './header.vue';
</script>

<template>
  <div class="slidev-layout logos-three-cols">
    <slot name="header" />
    
    <div class="columns">
      <div class="column">
        <slot name="left" />
      </div>
      <div class="column">
        <slot name="center" />
      </div>
      <div class="column">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logos-three-cols {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: var(--screen-margin);
}

.columns {
  display: flex;
  gap: 1rem;
  flex: 1;
  overflow: hidden;
}

.column {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}


</style>