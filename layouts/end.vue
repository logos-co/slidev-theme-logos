<script setup>
import Logo from '../components/Logo.vue'
</script>

<template>
  <div class="slidev-layout logos-end">
    <Logo id="logo" />
    <div class="logos-end-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>

.logos-end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 3rem 4rem;
  position: relative;

  #logo {
    height: 4rem;
    width: auto;
    margin-bottom: 2rem;
  }
}

</style>
