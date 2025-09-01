<template>
  <div class="article-card" :class="{ 'coming-soon-card': !article.available }">
    <div class="article-card-header">
      <h3 class="article-card-title">{{ article.title }}</h3>
      <p class="article-card-subtitle">{{ article.subtitle }}</p>
    </div>
    <div class="article-card-body">
      <p class="article-card-description">{{ article.description }}</p>
      <div class="article-tags">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="tag"
          :class="`difficulty-${article.difficulty}`"
        >
          {{ tag }}
        </span>
      </div>
      <router-link
        v-if="article.available"
        :to="article.path"
        class="article-link"
      >
        記事を読む →
      </router-link>
      <span v-else class="article-link">Coming Soon</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
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
.article-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: default;
  border: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  &.coming-soon-card {
    background: #f8f9fa;
    border: 2px dashed #ddd;
    opacity: 0.7;

    .article-card-header {
      background: #e0e0e0;
      color: #999;
    }

    .article-link {
      background-color: #ccc;
      cursor: not-allowed;
      pointer-events: none;
      color: #999;
    }
  }
}

.article-card-header {
  padding: 20px;
  color: white;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}

.article-card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: white;
}

.article-card-subtitle {
  font-size: 0.9rem;
  opacity: 0.9;
  color: white;
}

.article-card-body {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.article-card-description {
  color: #666;
  margin-bottom: 15px;
  flex-grow: 1;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tag {
  background-color: #f0f0f0;
  color: #555;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;

  &.difficulty-beginner {
    background-color: #e8f5e9;
    color: #2e7d32;
  }

  &.difficulty-intermediate {
    background-color: #fff3e0;
    color: #ef6c00;
  }

  &.difficulty-advanced {
    background-color: #fce4ec;
    color: #c2185b;
  }
}

.article-link {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  color: white;
  background-color: var(--primary-color);

  &:hover {
    transform: translateX(5px);
    background-color: var(--primary-color-dark);
  }
}
</style>
