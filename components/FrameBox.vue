<template>
  <div class="frame-box">
    <div class="frame-wrapper">
      <div class="frame-content">
        <slot />
      </div>
      <div v-click class="frame-border"></div>
    </div>
    <div v-if="label" v-after class="frame-label">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.frame-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.frame-wrapper {
  position: relative;
  flex: 1;
}

.frame-content {
  padding: 1.5rem;
  overflow-y: auto;
  height: 100%;
  z-index: 1;
  position: relative;
}

.frame-border {
  position: absolute;
  inset: 0;
  border: 2px solid var(--color-coral);
  border-radius: 4px;
  pointer-events: none;
}

.frame-label {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--color-coral);
  font-weight: 700;
}
</style>
