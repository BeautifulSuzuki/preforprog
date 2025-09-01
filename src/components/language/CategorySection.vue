<template>
  <div class="category-section">
    <div class="category-header">
      <div class="category-icon">{{ category.icon }}</div>
      <h2 class="category-title">{{ category.title }}</h2>
    </div>
    <p class="category-description">{{ category.description }}</p>
    <div class="articles-grid">
      <ArticleCard
        v-for="article in category.articles"
        :key="article.id"
        :article="article"
        :language="language"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'CategorySection',
  components: {
    ArticleCard
  },
  props: {
    category: {
      type: Object,
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
.category-section {
  margin-bottom: 50px;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
}

.category-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 1.5rem;
  background-color: var(--primary-color);
}

.category-title {
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
  margin: 0;
  border: none;
  padding: 0;
}

.category-description {
  color: #666;
  margin-left: 55px;
  margin-bottom: 25px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}
</style>
