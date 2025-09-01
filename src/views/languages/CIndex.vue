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
  name: 'CIndex',
  components: {
    HeaderSection,
    CategorySection,
    QuickLinks
  },
  data() {
    return {
      languageId: 'c',
      languageInfo: {
        title: 'C言語 学習リソース',
        subtitle: 'システムプログラミングの基礎',
        description: 'C言語はコンピュータの仕組みを理解しながら学べる、プログラミングの基礎となる言語です。OSや組み込みシステムで広く使われています。'
      },
      categories: [
        {
          id: 'beginner',
          icon: '📚',
          title: '初心者向け',
          description: 'C言語を始めたばかりの方向けの基礎的な内容です。環境構築から基本的な操作まで丁寧に解説します。',
          articles: [
            {
              id: 'c-beginner',
              title: '初心者向けC言語の使い方まとめ',
              subtitle: '完全ガイド',
              description: 'C言語の基本操作から実践的な技術まで、初心者が効率的に学習できるよう体系的にまとめた包括的なガイドです。',
              tags: ['初心者', '基礎', '環境構築'],
              difficulty: 'beginner',
              path: '/c/beginner',
              available: true
            },
            {
              id: 'c-memory',
              title: 'C言語のメモリ管理',
              subtitle: 'ポインタ入門',
              description: 'C言語の核心であるポインタとメモリ管理について、基本から実践まで解説します。',
              tags: ['初心者', 'ポインタ', 'メモリ'],
              difficulty: 'beginner',
              available: false
            },
            {
              id: 'c-control',
              title: 'C言語の制御構造',
              subtitle: 'if・forの基礎',
              description: '条件分岐と繰り返し処理の基本から、効率的な書き方まで学びます。',
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
              id: 'c-file',
              title: 'C言語のファイル処理',
              subtitle: '入出力の実践',
              description: 'ファイル入出力の基本から、効率的なデータ処理まで解説します。',
              tags: ['中級', 'ファイル', 'I/O'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'c-struct',
              title: 'C言語の構造体',
              subtitle: 'データ構造の基礎',
              description: '構造体を使った複雑なデータ管理を学びます。',
              tags: ['中級', '構造体', 'データ構造'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'c-macro',
              title: 'C言語のマクロ',
              subtitle: 'プリプロセッサ活用',
              description: 'マクロを使った高度なコード生成を学びます。',
              tags: ['中級', 'マクロ', 'プリプロセッサ'],
              difficulty: 'intermediate',
              available: false
            }
          ]
        },
        {
          id: 'advanced',
          icon: '🚀',
          title: '上級者向け',
          description: 'C言語を深く理解し、高度な機能を活用したい方向けの内容です。パフォーマンス最適化や専門的な応用を扱います。',
          articles: [
            {
              id: 'c-concurrent',
              title: 'C言語の並行処理',
              subtitle: 'スレッドと同期',
              description: 'POSIXスレッドを使った並行プログラミングを解説します。',
              tags: ['上級', '並行処理', 'スレッド'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'c-network',
              title: 'C言語のネットワークプログラミング',
              subtitle: 'ソケット活用',
              description: 'ソケットを使ったクライアント/サーバー実装を学びます。',
              tags: ['上級', 'ネットワーク', 'ソケット'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'c-optimization',
              title: 'C言語のパフォーマンス最適化',
              subtitle: 'インラインアセンブラ',
              description: '低レベル最適化のテクニックを解説します。',
              tags: ['上級', '最適化', 'アセンブラ'],
              difficulty: 'advanced',
              available: false
            }
          ]
        }
      ],
      quickLinks: [
        {
          title: 'C標準ライブラリドキュメント',
          url: 'https://www.gnu.org/software/libc/manual/html_node/index.html',
          icon: '📖'
        },
        {
          title: 'Stack Overflow Cタグ',
          url: 'https://stackoverflow.com/questions/tagged/c',
          icon: '👥'
        },
        {
          title: 'cppreference.com C',
          url: 'https://en.cppreference.com/w/c',
          icon: '🎓'
        },
        {
          title: 'GitHub Cリポジトリ',
          url: 'https://github.com/topics/c',
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
