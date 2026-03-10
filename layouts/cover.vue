<script setup>
import Logo from '../components/Logo.vue'
</script>

<template>
  <div class="slidev-layout logos-cover">
    <div class="header">
      <Logo />
      <span class="date">{{ $frontmatter.date }}</span>
      <span class="site">logos.co</span>
      <span class="description">{{ $frontmatter.description }}</span>
    </div>

    <h1>{{ $frontmatter.title }}</h1>

    <div class="two-column">
      <p class="left">{{ $frontmatter.event }}</p>
      <p class="right">{{ $frontmatter.comment }}</p>
    </div>

  </div>
</template>

<style scoped>
/* Cover slide uses dark background per brand guidelines */
.logos-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: var(--screen-margin);
  position: relative;
}

.header {
  position: absolute;
  top: var(--screen-margin);
  left: var(--screen-margin);
  right: var(--screen-margin);
  display: flex;
  justify-content: space-between;
  align-items: top;
  gap: 1rem;
  font-size: 0.7rem;
  color: var(--color-forest);
}

/* Hero title per brand type scale: 40-58pt, Times, Bold */
h1 {
  font-family: var(--font-heading) !important;
  font-size: 3.8rem;
  font-weight: 100 !important;
  color: var(--color-forest) !important;
}

.two-column {
  display: flex;
  width: 50%;
  margin-top: 0.5rem;
}

.two-column .left,
.two-column .right {
  flex: 1;
  font-size: 0.8rem;
  line-height: 1.6;
  font-family: var(--font-body);
  color: var(--color-forest);
}

.two-column .right {
  white-space: pre-line;
}
</style>