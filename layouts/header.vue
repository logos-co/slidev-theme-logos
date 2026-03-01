<template>
    <div class="logos-two-cols-header">
      <slot name="default" />
      <slot />
    </div>
    <div class="footer">
        <span class="footer-item">Logos.co</span>
        <slot />
        <span v-if="!$frontmatter.hidePageNumber">{{ $slidev.nav.currentPage }}</span>
    </div>
</template>


<style scoped>
/* Footer bar per brand guidelines: Logos.co bottom-left, page number bottom-right */
.footer {
    position: absolute;
    bottom: var(--screen-margin);
    left: var(--screen-margin);
    right: var(--screen-margin);
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: 0.75rem;
    font-family: var(--font-body);
    color: var(--color-forest);
    border-top: var(--border-subtle);
    padding-top: 0.75rem;
}
</style>