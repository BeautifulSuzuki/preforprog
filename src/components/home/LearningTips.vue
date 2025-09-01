<template>
  <div class="learning-tips">
    <h2>効果的な学習方法</h2>
    <h3>プログラミング学習を成功させるためのアドバイス</h3>

    <div v-for="(tip, index) in tips" :key="index" class="tip-item">
      <h3>{{ index + 1 }}. {{ tip.title }}</h3>
      <p>{{ tip.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearningTips',
  data() {
    return {
      tips: [
        {
          title: '手を動かしながら学ぶ',
          description: 'コードを読むだけでなく、実際に入力して実行することで理解が深まります。エラーが出ても、それを解決する過程で多くを学べます。'
        },
        {
          title: '小さなプログラムから始める',
          description: '最初から大きなプログラムを作ろうとせず、簡単な機能から実装していきましょう。徐々に複雑なプログラムに挑戦していくことが大切です。'
        },
        {
          title: 'エラーメッセージを読む習慣をつける',
          description: 'エラーは学習の機会です。エラーメッセージをしっかり読み、原因を理解することで、同じ間違いを繰り返さなくなります。'
        },
        {
          title: '定期的に復習する',
          description: '学んだ内容は定期的に復習し、実際のプロジェクトで使ってみることで定着します。自分なりのメモやサンプルコード集を作るのも効果的です。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.learning-tips {
  background: rgba(236, 240, 241, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  margin: 40px 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);

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

.tip-item {
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #e74c3c;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  h3 {
    color: #e74c3c;
    margin-bottom: 10px;
    text-align: left;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
}
</style>
