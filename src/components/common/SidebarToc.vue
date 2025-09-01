<template>
  <aside class="sidebar-toc" :class="{ active: isActive }">
    <div class="toc-header">
      <h3>目次</h3>
      <button class="toc-toggle" @click="$emit('close')" aria-label="目次を閉じる">
        ×
      </button>
    </div>
    <nav class="toc-nav">
      <ul class="toc-list">
        <li v-for="item in tocItems" :key="item.id" class="toc-item">
          <a
            :href="`#${item.id}`"
            class="toc-link"
            :class="{ active: activeSection === item.id }"
            @click="handleClick($event, item.id)"
          >
            {{ item.title }}
          </a>
          <ul v-if="item.children" class="toc-sublist">
            <li v-for="child in item.children" :key="child.id">
              <a
                :href="`#${child.id}`"
                class="toc-sublink"
                @click="handleClick($event, child.id)"
              >
                {{ child.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { useScrollSpy } from '@/composables/useScrollSpy'

export default {
  name: 'SidebarToc',
  props: {
    tocItems: {
      type: Array,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props) {
    const { activeSection } = useScrollSpy(props.tocItems)

    return {
      activeSection
    }
  },
  methods: {
    handleClick(event, sectionId) {
      event.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })

        if (window.innerWidth <= 1024) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// スタイルは元のCSSと同じ
</style>
