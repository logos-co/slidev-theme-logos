<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideRoute, currentPage } = useNav()
const frontmatter = computed(() => currentSlideRoute.value?.meta?.slide?.frontmatter ?? {})
</script>

<template>
  <div v-if="frontmatter.footer !== false" class="global-footer">
    <span class="footer-item">Logos.co</span>
    <span v-if="!frontmatter.hidePageNumber">{{ currentPage }}</span>
  </div>
</template>

<style scoped>
.global-footer {
  position: absolute;
  bottom: var(--screen-margin, 2rem);
  left: var(--screen-margin, 2rem);
  right: var(--screen-margin, 2rem);
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.75rem;
  font-family: var(--font-body, sans-serif);
  color: var(--color-forest, #152521);
  border-top: var(--border-subtle, 1px solid rgba(21, 37, 33, 0.2));
  padding-top: 0.75rem;
  pointer-events: none;
  z-index: 10;
}
</style>
