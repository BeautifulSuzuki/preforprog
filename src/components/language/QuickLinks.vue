<template>
  <div class="quick-links">
    <h2>クイックリンク</h2>
    <div class="links-grid">
      <div v-for="link in links" :key="link.title" class="quick-link-item">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">
          <span class="icon">{{ link.icon }}</span>
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickLinks',
  props: {
    links: {
      type: Array,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.quick-links {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-top: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);

  h2 {
    margin-bottom: 20px;
    border: none;
    padding: 0;
    color: var(--primary-color);
  }
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.quick-link-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  a {
    color: #555;
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .icon {
    margin-right: 10px;
    color: var(--primary-color);
  }
}
</style>
