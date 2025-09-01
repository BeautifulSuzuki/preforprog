<template>
  <button class="mobile-toc-toggle" @click="$emit('click')" aria-label="目次を開く">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'MobileTocToggle',
  emits: ['click']
}
</script>

<style lang="scss" scoped>
.mobile-toc-toggle {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #0066cc;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 999;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
}
</style>
