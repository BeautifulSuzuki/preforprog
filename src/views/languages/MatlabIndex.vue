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
  name: 'MatlabIndex',
  components: {
    HeaderSection,
    CategorySection,
    QuickLinks
  },
  data() {
    return {
      languageId: 'matlab',
      languageInfo: {
        title: 'MATLAB 学習リソース',
        subtitle: '数値計算とデータ可視化のための強力なツール',
        description: 'MATLABは工学、科学、金融などの分野で広く使用されているプログラミング環境です。行列演算を得意とし、豊富な組み込み関数とツールボックスにより、複雑な数値計算から高度なデータ解析まで効率的に実行できます。'
      },
      categories: [
        {
          id: 'beginner',
          icon: '📚',
          title: '初心者向け',
          description: 'MATLABを始めたばかりの方向けの基礎的な内容です。環境構築から基本的な操作まで丁寧に解説します。',
          articles: [
            {
              id: 'matlab-beginner',
              title: '初心者向けMATLABの使い方まとめ',
              subtitle: '完全ガイド',
              description: 'MATLABの基本操作から実践的な技術まで、初心者が効率的に学習できるよう体系的にまとめた包括的なガイドです。',
              tags: ['初心者', '基礎', '環境構築'],
              difficulty: 'beginner',
              path: '/matlab/beginner',
              available: true
            },
            {
              id: 'matlab-plot',
              title: 'MATLABの基本的なプロット',
              subtitle: 'データ可視化入門',
              description: '2次元・3次元プロットの基本から、グラフのカスタマイズまで、MATLABでのデータ可視化の基礎を学びます。',
              tags: ['初心者', '可視化', 'グラフ'],
              difficulty: 'beginner',
              path: '/matlab/plot',
              available: true
            },
            {
              id: 'matlab-matrix',
              title: 'MATLABでの行列演算入門',
              subtitle: '線形代数の基礎',
              description: 'MATLABの最大の特徴である行列演算について、基本的な操作から実用的な応用まで解説します。',
              tags: ['初心者', '行列', '線形代数'],
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
              id: 'matlab-signal',
              title: 'MATLABでの信号処理',
              subtitle: 'フィルタリングとFFT',
              description: 'デジタル信号処理の基本から、フィルタ設計、周波数解析まで、MATLABを使った信号処理技術を解説します。',
              tags: ['中級', '信号処理', 'DSP'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'matlab-simulink',
              title: 'Simulinkによるシステムモデリング',
              subtitle: 'ブロック線図でのシミュレーション',
              description: 'Simulinkを使った動的システムのモデリングとシミュレーション手法について実例を交えて解説します。',
              tags: ['中級', 'Simulink', 'モデリング'],
              difficulty: 'intermediate',
              available: false
            },
            {
              id: 'matlab-optimization',
              title: 'MATLABでの最適化問題',
              subtitle: 'Optimization Toolbox活用',
              description: '線形計画法から非線形最適化まで、MATLABを使った様々な最適化問題の解法を学びます。',
              tags: ['中級', '最適化', '数値解析'],
              difficulty: 'intermediate',
              available: false
            }
          ]
        },
        {
          id: 'advanced',
          icon: '🚀',
          title: '上級者向け',
          description: 'MATLABを深く理解し、高度な機能を活用したい方向けの内容です。パフォーマンス最適化や専門的な応用を扱います。',
          articles: [
            {
              id: 'matlab-parallel',
              title: '並列計算とGPU活用',
              subtitle: '高速化テクニック',
              description: 'Parallel Computing ToolboxとGPU Coderを使った並列処理により、計算を大幅に高速化する手法を解説します。',
              tags: ['上級', '並列計算', 'GPU'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'matlab-ml',
              title: 'MATLABでの機械学習実装',
              subtitle: 'Statistics and Machine Learning Toolbox',
              description: '分類、回帰、クラスタリングなど、MATLABを使った機械学習アルゴリズムの実装と応用について詳しく解説します。',
              tags: ['上級', '機械学習', 'AI'],
              difficulty: 'advanced',
              available: false
            },
            {
              id: 'matlab-codegen',
              title: 'MATLABからC/C++への自動コード生成',
              subtitle: 'MATLAB Coder活用',
              description: 'MATLABコードから高速なC/C++コードを自動生成し、組み込みシステムやリアルタイムアプリケーションに展開する方法を学びます。',
              tags: ['上級', 'コード生成', '組み込み'],
              difficulty: 'advanced',
              available: false
            }
          ]
        }
      ],
      quickLinks: [
        {
          title: 'MATLAB公式ドキュメント',
          url: 'https://jp.mathworks.com/help/matlab/',
          icon: '📖'
        },
        {
          title: 'MATLAB Central',
          url: 'https://jp.mathworks.com/matlabcentral/',
          icon: '👥'
        },
        {
          title: 'MATLAB入門チュートリアル',
          url: 'https://jp.mathworks.com/support/learn-with-matlab-tutorials.html',
          icon: '🎓'
        },
        {
          title: 'File Exchange',
          url: 'https://jp.mathworks.com/matlabcentral/fileexchange/',
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
