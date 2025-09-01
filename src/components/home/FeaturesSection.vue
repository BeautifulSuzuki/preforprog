<template>
  <div class="features">
    <h2>学習ガイドの特徴</h2>
    <h3>効率的に学習できる工夫が満載</h3>
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-item">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          title: '体系的なカリキュラム',
          description: '環境構築から応用まで、段階的に学習できる構成'
        },
        {
          title: '実践的なサンプルコード',
          description: 'すぐに試せる実用的なコード例を多数掲載'
        },
        {
          title: '重要ポイントの解説',
          description: 'つまずきやすい箇所を丁寧に説明'
        },
        {
          title: 'ベストプラクティス',
          description: '実務で役立つコーディング規約やTips'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  margin: 40px 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  h3 {
    text-align: center;
    color: #666;
    font-weight: normal;
    margin-bottom: 30px;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.feature-item {
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #667eea;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
}
</style>
