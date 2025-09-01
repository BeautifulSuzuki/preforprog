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
  name: 'CppIndex',
  components: {
    HeaderSection,
    CategorySection,
    QuickLinks
  },
  data() {
    return {
      languageId: 'cpp',
      languageInfo: {
        title: 'C++ 学習リソース',
        subtitle: '高性能なオブジェクト指向言語',
        description: 'C++はC言語を拡張した言語で、オブジェクト指向やジェネリックプログラミングを可能にしています。高性能なアプリケーション開発に適しています。'
      },
      categories: [
        {
          id: 'beginner',
          icon: '📚',
          title: '初心者向け',
          description: 'C++を始めたばかりの方向けの基礎的な内容です。環境構築から基本的な操作まで丁寧に解説します。',
          articles: [
            {
              id: 'cpp-beginner',
              title: '初心者向けC++の使い方まとめ',
              subtitle: '完全ガイド',
              description: 'C++の基本操作から実践的な技術まで、初心者が効率的に学習できるよう体系的にまとめた包括的なガイドです。',
              tags: ['初心者', '基礎', '環境構築'],
              difficulty: 'beginner',
              path: '/cpp/beginner',
              available: true
            },
            {
              id: 'cpp-class',
              title: 'C++のクラス入門',
              subtitle: 'OOP基礎',
              description: 'C++のオブジェクト指向プログラミングの基本を学びます。',
              tags: ['初心者', 'クラス', 'OOP'],
              difficulty: 'beginner',
              available: false
            },
            {
              id: 'cpp-template',
              title: 'C++のテンプレート',
              subtitle: 'ジェネリックプログラミング',
              description: 'テンプレートを使った汎用的なコードの書き方を解説します。',
              tags: ['初心者', 'テンプレート', 'ジェネリック'],
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
              id: 'cpp-stl',
              title: 'C++のSTL活用',
              subtitle: '標準ライブラリ',
              description: 'コンテナとアルゴリズムの活用を解説します。',
              tags: ['中級', 'STL', 'コンテナ'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'cpp-concurrent',
              title: 'C++の並行処理',
              subtitle: 'スレッドと同期',
              description: 'マルチスレッドプログラミングの実践を学びます。',
              tags: ['中級', '並行処理', 'スレッド'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'cpp-metaprogramming',
              title: 'C++のテンプレートメタプログラミング',
              subtitle: 'コンパイル時計算',
              description: '高度なテンプレート技法を解説します。',
              tags: ['中級', 'メタプログラミング', 'テンプレート'],
              difficulty: 'intermediate',
              available: false
            }
          ]
        },
        {
          id: 'advanced',
          icon: '🚀',
          title: '上級者向け',
          description: 'C++を深く理解し、高度な機能を活用したい方向けの内容です。パフォーマンス最適化や専門的な応用を扱います。',
          articles: [
            {
              id: 'cpp-modern',
              title: 'C++のモダン機能',
              subtitle: 'C++17/20/23',
              description: '最新のC++標準の新機能を詳しく解説します。',
              tags: ['上級', 'モダンC++', '新機能'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'cpp-parallel',
              title: 'C++の並列プログラミング',
              subtitle: 'Concurrency',
              description: '高度な並列処理と同期メカニズムを学びます。',
              tags: ['上級', '並列', 'Concurrency'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'cpp-performance',
              title: 'C++のパフォーマンスチューニング',
              subtitle: '最適化テクニック',
              description: 'コードの高速化とメモリ最適化を解説します。',
              tags: ['上級', '最適化', 'パフォーマンス'],
              difficulty: 'advanced',
              available: false
            }
          ]
        }
      ],
      quickLinks: [
        {
          title: 'cppreference.com',
          url: 'https://en.cppreference.com/w/cpp',
          icon: '📖'
        },
        {
          title: 'Stack Overflow C++タグ',
          url: 'https://stackoverflow.com/questions/tagged/c++',
          icon: '👥'
        },
        {
          title: 'ISO C++',
          url: 'https://isocpp.org/',
          icon: '🎓'
        },
        {
          title: 'GitHub C++リポジトリ',
          url: 'https://github.com/topics/cpp',
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
