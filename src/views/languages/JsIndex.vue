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
  name: 'JsIndex',
  components: {
    HeaderSection,
    CategorySection,
    QuickLinks
  },
  data() {
    return {
      languageId: 'js',
      languageInfo: {
        title: 'JavaScript 学習リソース',
        subtitle: 'Web開発の必須言語',
        description: 'JavaScriptはブラウザで動作し、フロントエンドからバックエンドまで幅広く使用される言語です。非同期処理が得意です。'
      },
      categories: [
        {
          id: 'beginner',
          icon: '📚',
          title: '初心者向け',
          description: 'JavaScriptを始めたばかりの方向けの基礎的な内容です。環境構築から基本的な操作まで丁寧に解説します。',
          articles: [
            {
              id: 'js-beginner',
              title: '初心者向けJavaScriptの使い方まとめ',
              subtitle: '完全ガイド',
              description: 'JavaScriptの基本操作から実践的な技術まで、初心者が効率的に学習できるよう体系的にまとめた包括的なガイドです。',
              tags: ['初心者', '基礎', '環境構築'],
              difficulty: 'beginner',
              path: '/javascript/beginner',
              available: true
            },
            {
              id: 'js-dom',
              title: 'JavaScriptのDOM操作',
              subtitle: 'Webページ制御',
              description: 'HTML要素の操作とイベントハンドリングの基本を学びます。',
              tags: ['初心者', 'DOM', 'イベント'],
              difficulty: 'beginner',
              available: false
            },
            {
              id: 'js-async',
              title: 'JavaScriptの非同期処理',
              subtitle: 'Promise入門',
              description: '非同期処理の基礎からPromiseの使い方まで解説します。',
              tags: ['初心者', '非同期', 'Promise'],
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
              id: 'js-modules',
              title: 'JavaScriptのモジュール',
              subtitle: 'ES Modules',
              description: 'モジュールシステムを使ったコードの整理方法を解説します。',
              tags: ['中級', 'モジュール', 'ES6'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'js-class',
              title: 'JavaScriptのクラス',
              subtitle: 'OOP実践',
              description: 'クラスを使ったオブジェクト指向プログラミングを学びます。',
              tags: ['中級', 'クラス', 'OOP'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'js-async-await',
              title: 'JavaScriptのasync/await',
              subtitle: '非同期の高度活用',
              description: '非同期処理のベストプラクティスを解説します。',
              tags: ['中級', '非同期', 'async'],
              difficulty: 'intermediate',
              available: false
            }
          ]
        },
        {
          id: 'advanced',
          icon: '🚀',
          title: '上級者向け',
          description: 'JavaScriptを深く理解し、高度な機能を活用したい方向けの内容です。パフォーマンス最適化や専門的な応用を扱います。',
          articles: [
            {
              id: 'js-performance',
              title: 'JavaScriptのパフォーマンス',
              subtitle: '最適化テクニック',
              description: '高速化のための高度なテクニックを解説します。',
              tags: ['上級', '最適化', 'パフォーマンス'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'js-security',
              title: 'JavaScriptのセキュリティ',
              subtitle: 'ベストプラクティス',
              description: 'Webアプリケーションのセキュリティ対策を学びます。',
              tags: ['上級', 'セキュリティ', 'ベストプラクティス'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'js-metaprogramming',
              title: 'JavaScriptのメタプログラミング',
              subtitle: 'ProxyとReflect',
              description: '高度なメタプログラミング技法を解説します。',
              tags: ['上級', 'メタプログラミング', 'Proxy'],
              difficulty: 'advanced',
              available: false
            }
          ]
        }
      ],
      quickLinks: [
        {
          title: 'MDN Web Docs',
          url: 'https://developer.mozilla.org/ja/docs/Web/JavaScript',
          icon: '📖'
        },
        {
          title: 'Stack Overflow JSタグ',
          url: 'https://stackoverflow.com/questions/tagged/javascript',
          icon: '👥'
        },
        {
          title: 'MDN JavaScriptガイド',
          url: 'https://developer.mozilla.org/ja/docs/Learn/JavaScript',
          icon: '🎓'
        },
        {
          title: 'npm (Node Package Manager)',
          url: 'https://npmjs.com/',
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
