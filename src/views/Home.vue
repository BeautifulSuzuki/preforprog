<template>
  <div class="container">
    <h1>学習する言語を選択</h1>
    <h2>各言語の完全な学習ガイドにアクセスできます</h2>

    <div class="languages-grid">
      <LanguageCard
        v-for="lang in languages"
        :key="lang.id"
        :language="lang"
      />
    </div>

    <FeaturesSection />
    <LearningTips />
  </div>
</template>

<script>
  import LanguageCard from '@/components/home/LanguageCard.vue'
  import FeaturesSection from '@/components/home/FeaturesSection.vue'
  import LearningTips from '@/components/home/LearningTips.vue'
  import { languages } from '@/data/languages'

  export default {
    name: 'Home',
    components: {
      LanguageCard,
      FeaturesSection,
      LearningTips
    },
    data() {
      return {
        languages
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 60px;
  }

  h1 {
    font-size: 2.5em;
    text-align: center;
    margin: 40px 0;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: 2em;
    text-align: center;
    color: #34495e;
    margin: 30px 0;
  }

  .languages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin: 40px 0;
  }
</style>
