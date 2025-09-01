<script>
  import TopNavbar from '@/components/common/TopNavbar.vue'

  export default {
    name: 'App',
    components: {
      TopNavbar
    }
  }
</script>

<template>
  <div id="app">
    <TopNavbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
