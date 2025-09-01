<template>
  <div class="container">
    <HeaderSection
      :title="languageInfo.title"
      :subtitle="languageInfo.subtitle"
      :description="languageInfo.description"
    />

    <CategorySection
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :language="languageId"
    />

    <QuickLinks :links="quickLinks" :language="languageId" />
  </div>
</template>

<script>
import HeaderSection from '@/components/language/HeaderSection.vue'
import CategorySection from '@/components/language/CategorySection.vue'
import QuickLinks from '@/components/language/QuickLinks.vue'

export default {
  name: 'PythonIndex',
  components: {
    HeaderSection,
    CategorySection,
    QuickLinks
  },
  data() {
    return {
      languageId: 'python',
      languageInfo: {
        title: 'Python 学習リソース',
        subtitle: 'シンプルで強力な汎用プログラミング言語',
        description: 'Pythonは読みやすく、幅広い用途に使える言語です。データサイエンス、Web開発、自動化など、多様な分野で活用されています。豊富なライブラリが魅力です。'
      },
      categories: [
        {
          id: 'beginner',
          icon: '📚',
          title: '初心者向け',
          description: 'Pythonを始めたばかりの方向けの基礎的な内容です。環境構築から基本的な操作まで丁寧に解説します。',
          articles: [
            {
              id: 'python-beginner',
              title: '初心者向けPythonの使い方まとめ',
              subtitle: '完全ガイド',
              description: 'Pythonの基本操作から実践的な技術まで、初心者が効率的に学習できるよう体系的にまとめた包括的なガイドです。',
              tags: ['初心者', '基礎', '環境構築'],
              difficulty: 'beginner',
              path: '/python/beginner',
              available: true
            },
            {
              id: 'python-data-structures',
              title: 'Pythonでのデータ構造',
              subtitle: 'リスト・辞書入門',
              description: 'Pythonの強力なデータ構造について、基本的な使い方から実用的な応用まで解説します。',
              tags: ['初心者', 'データ構造', 'リスト'],
              difficulty: 'beginner',
              available: false
            },
            {
              id: 'python-control',
              title: 'Pythonの制御構造',
              subtitle: 'if・forの基礎',
              description: '条件分岐と繰り返し処理の基本から、リスト内包表記などのPythonらしい書き方まで学びます。',
              tags: ['初心者', '制御構文', 'ループ'],
              difficulty: 'beginner',
              available: false
            }
          ]
        },
        {
          id: 'intermediate',
          icon: '⚡',
          title: '中級者向け',
          description: '基本操作に慣れた方向けの、より実践的な内容です。効率的なプログラミングテクニックや応用的な機能を学びます。',
          articles: [
            {
              id: 'python-pandas',
              title: 'Pythonでのデータ解析',
              subtitle: 'Pandas入門',
              description: 'Pandasを使ったデータフレーム操作、データ分析の基本から実践まで解説します。',
              tags: ['中級', 'データ解析', 'Pandas'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'python-oop',
              title: 'Pythonのオブジェクト指向',
              subtitle: 'クラスと継承',
              description: 'Pythonでのクラス設計、継承、多重継承などのOOP概念を詳しく解説します。',
              tags: ['中級', 'OOP', 'クラス'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'python-concurrent',
              title: 'Pythonの並行処理',
              subtitle: 'ThreadingとMultiprocessing',
              description: 'PythonのGILを考慮した並行処理の実装方法を学びます。',
              tags: ['中級', '並行処理', 'スレッド'],
              difficulty: 'intermediate',
              available: false
            }
          ]
        },
        {
          id: 'advanced',
          icon: '🚀',
          title: '上級者向け',
          description: 'Pythonを深く理解し、高度な機能を活用したい方向けの内容です。パフォーマンス最適化や専門的な応用を扱います。',
          articles: [
            {
              id: 'python-meta',
              title: 'Pythonのメタプログラミング',
              subtitle: 'メタクラスとデコレータ',
              description: '高度なメタプログラミング技法を使って、柔軟なコードを記述します。',
              tags: ['上級', 'メタプログラミング', 'デコレータ'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'python-ml',
              title: 'Pythonでの機械学習',
              subtitle: 'scikit-learn活用',
              description: '機械学習のアルゴリズム実装と応用を詳しく解説します。',
              tags: ['上級', '機械学習', 'AI'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'python-performance',
              title: 'Pythonのパフォーマンス最適化',
              subtitle: 'CythonとNumba',
              description: 'Pythonコードを高速化するための高度なテクニックを学びます。',
              tags: ['上級', '最適化', 'Cython'],
              difficulty: 'advanced',
              available: false
            }
          ]
        }
      ],
      quickLinks: [
        {
          title: 'Python公式ドキュメント',
          url: 'https://docs.python.org/ja/3/',
          icon: '📖'
        },
        {
          title: 'Pythonコミュニティ',
          url: 'https://www.python.org/community/',
          icon: '👥'
        },
        {
          title: 'Python公式チュートリアル',
          url: 'https://docs.python.org/ja/3/tutorial/',
          icon: '🎓'
        },
        {
          title: 'PyPI (Python Package Index)',
          url: 'https://pypi.org/',
          icon: '📦'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 40px;
}
</style>
