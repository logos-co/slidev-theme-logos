<template>
  <div class="slidev-layout logos-steps" :data-footer="$frontmatter.footer !== false ? 'true' : undefined">
    <div class="columns" :style="{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }">
      <div class="col" v-for="(s, i) in active" :key="s">
        <div class="num">{{ String(i + 1).padStart(2, '0') }}</div>
        <div class="body"><slot :name="s" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const slots = useSlots()
const all = ['s1','s2','s3','s4','s5','s6']
const active = computed(() => all.filter(s => !!slots[s]))
const count = computed(() => active.value.length)
</script>

<style scoped>
.logos-steps {
  display: flex;
  height: 100%;
}

.columns {
  display: grid;
  flex: 1;
  border-left: var(--border-light);
  border-right: var(--border-light);
}

.col {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 0 1.5rem;
  border-right: var(--border-light);
}

.col:last-child {
  border-right: none;
}

.stage:empty {
  visibility: hidden;
}

.num {
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 500;
  opacity: 0.4;
  margin-bottom: 0.5rem;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;
  min-height: 8.5rem;
}

.body :deep(h3) {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.body :deep(p),
.body :deep(li) {
  font-size: 0.8rem;
  line-height: 1.5;
  opacity: 0.7;
}

.body :deep(ul) {
  padding-left: 0;
  list-style: none;
}
</style>