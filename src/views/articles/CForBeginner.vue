<template>
  <div class="article-container">
    <article class="article-content">
      <header class="article-header">
        <h1>C言語 完全学習ガイド</h1>
        <p class="article-meta">初心者から上級者まで、C言語を体系的に学習できる完全ガイド</p>
      </header>

      <nav class="table-of-contents" v-if="!isMobile">
        <h2>目次</h2>
        <ol>
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`" @click="scrollToSection($event, section.id)">
              {{ section.title }}
            </a>
            <ul v-if="section.subsections">
              <li v-for="sub in section.subsections" :key="sub">{{ sub }}</li>
            </ul>
          </li>
        </ol>
      </nav>

      <section v-for="section in sectionsContent" :key="section.id" :id="section.id" class="article-section">
        <h2>{{ section.title }}</h2>
        <div v-html="section.content"></div>
      </section>
    </article>

    <SidebarToc
      :toc-items="tocItems"
      :is-active="isTocActive"
      @close="isTocActive = false"
    />

    <MobileTocToggle @click="isTocActive = true" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import SidebarToc from '@/components/common/SidebarToc.vue'
import MobileTocToggle from '@/components/common/MobileTocToggle.vue'
import { useCodeHighlight } from '@/composables/useCodeHighlight'

export default {
  name: 'CForBeginner',
  components: {
    SidebarToc,
    MobileTocToggle
  },
  setup() {
    const isTocActive = ref(false)
    const isMobile = ref(false)
    const { highlightCode } = useCodeHighlight()

    const sections = [
      {
        id: 'section1',
        title: '1. 環境構築',
        subsections: ['コンパイラのインストール', 'エディタ/IDEの設定', 'Makefileの基本']
      },
      {
        id: 'section2',
        title: '2. 基本操作',
        subsections: ['プログラムの基本構造', 'コンパイルオプション', 'プリプロセッサ']
      },
      {
        id: 'section3',
        title: '3. 変数とデータ型',
        subsections: ['基本データ型', '変数の宣言とスコープ', '型変換']
      },
      {
        id: 'section4',
        title: '4. 配列',
        subsections: ['一次元配列', '多次元配列', '配列とポインタ', '文字列操作']
      },
      {
        id: 'section5',
        title: '5. 演算',
        subsections: ['算術演算子', 'ビット演算子', 'その他の演算子']
      },
      {
        id: 'section6',
        title: '6. 論理演算',
        subsections: ['比較演算子', '論理演算子', '真偽値の扱い']
      },
      {
        id: 'section7',
        title: '7. よく使う関数',
        subsections: ['入出力関数（stdio.h）', '文字列関数（string.h）', '数学関数（math.h）', 'メモリ管理関数（stdlib.h）']
      },
      {
        id: 'section8',
        title: '8. 制御構文',
        subsections: ['if文', 'switch文', 'ループ文', 'goto文（使用は推奨されない）']
      },
      {
        id: 'section9',
        title: '9. 関数定義',
        subsections: ['基本的な関数定義', '引数の渡し方', '可変長引数', '再帰関数', '関数ポインタ']
      },
      {
        id: 'section10',
        title: '10. 構造体（クラスに相当）',
        subsections: ['基本的な構造体', '構造体とポインタ', 'ネストした構造体', '共用体とビットフィールド', '構造体を使った実装例']
      },
      {
        id: 'section11',
        title: '11. Tips',
        subsections: ['メモリ管理のベストプラクティス', 'デバッグテクニック', 'パフォーマンス最適化', '移植性の高いコード', 'よくある落とし穴と対策']
      }
    ]

    const sectionsContent = [
      {
        id: 'section1',
        title: '1. 環境構築',
        content: `
          <p>C言語の開発環境を整えましょう。</p>

          <h3>コンパイラのインストール</h3>
          <pre><code class="language-c"># Windows
# MinGW-w64のインストール
# 1. https://www.mingw-w64.org/ からダウンロード
# 2. インストーラーを実行
# 3. 環境変数PATHに追加

# または Visual Studio Community をインストール
# C++によるデスクトップ開発ワークロードを選択

# macOS
# Xcodeコマンドラインツールをインストール
xcode-select --install

# または Homebrewでgccをインストール
brew install gcc

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install build-essential

# バージョン確認
gcc --version
# または
clang --version</code></pre>

          <h3>エディタ/IDEの設定</h3>
          <pre><code class="language-c"># Visual Studio Code の設定
# 1. C/C++ 拡張機能をインストール
# 2. Code Runner 拡張機能をインストール（オプション）

# 簡単なプログラムでテスト (hello.c)
#include &lt;stdio.h&gt;

int main() {
    printf("Hello, C!\\n");
    return 0;
}

# コンパイルと実行
gcc hello.c -o hello
./hello  # Linux/macOS
hello.exe  # Windows</code></pre>

          <h3>Makefileの基本</h3>
          <pre><code class="language-c"># Makefile の例
CC = gcc
CFLAGS = -Wall -Wextra -g
TARGET = myprogram

$(TARGET): main.c utils.c
    $(CC) $(CFLAGS) -o $(TARGET) main.c utils.c

clean:
    rm -f $(TARGET)

# 使用方法
make        # ビルド
make clean  # クリーンアップ</code></pre>
        `
      },
      {
        id: 'section2',
        title: '2. 基本操作',
        content: `
          <p>C言語プログラムの基本構造と実行方法を学びます。</p>

          <h3>プログラムの基本構造</h3>
          <pre><code class="language-c">#include &lt;stdio.h&gt;  // 標準入出力ヘッダ

// 関数のプロトタイプ宣言
void greet(void);

// main関数 - プログラムのエントリポイント
int main(void) {
    // 変数の宣言
    int number = 42;

    // 処理
    printf("Number: %d\\n", number);
    greet();

    // 正常終了
    return 0;
}

// 関数の定義
void greet(void) {
    printf("Hello from function!\\n");
}</code></pre>

          <h3>コンパイルオプション</h3>
          <pre><code class="language-c"># 基本的なコンパイル
gcc source.c                    # a.out (Linux/macOS) または a.exe (Windows)
gcc source.c -o program         # 出力ファイル名を指定

# 警告オプション
gcc -Wall source.c              # すべての警告を表示
gcc -Wextra source.c            # 追加の警告
gcc -Werror source.c            # 警告をエラーとして扱う

# デバッグとリリース
gcc -g source.c                 # デバッグ情報を含める
gcc -O2 source.c                # 最適化レベル2
gcc -O3 source.c                # 最大最適化

# 標準規格の指定
gcc -std=c99 source.c           # C99標準
gcc -std=c11 source.c           # C11標準
gcc -std=c17 source.c           # C17標準</code></pre>

          <h3>プリプロセッサ</h3>
          <pre><code class="language-c">// マクロ定義
#define PI 3.14159
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

// 条件付きコンパイル
#ifdef DEBUG
    #define LOG(msg) printf("DEBUG: %s\\n", msg)
#else
    #define LOG(msg)
#endif

// インクルードガード
#ifndef MYHEADER_H
#define MYHEADER_H

// ヘッダーの内容

#endif // MYHEADER_H

// プラットフォーム依存コード
#ifdef _WIN32
    #include &lt;windows.h&gt;
#elif __linux__
    #include &lt;unistd.h&gt;
#endif</code></pre>
        `
      },
      // 他のセクションも同様に実装...
    ]

    const tocItems = sections.map(section => ({
      id: section.id,
      title: section.title,
      children: section.subsections?.map((sub, index) => ({
        id: `${section.id}-${index + 1}`,
        title: sub
      }))
    }))

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }

    const scrollToSection = (event, sectionId) => {
      event.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }

    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
      nextTick(() => {
        highlightCode()
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile)
    })

    return {
      sections,
      sectionsContent,
      tocItems,
      isTocActive,
      isMobile,
      scrollToSection
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    padding: 70px 15px 30px;
  }
}

.article-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
}

.article-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;

  h1 {
    font-size: 2.5rem;
    color: var(--c-color);
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .article-meta {
    font-size: 1.2rem;
    color: #555;
  }
}

.table-of-contents {
  background: #f0f2f5;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e3e8;

  h2 {
    margin-bottom: 20px;
    color: var(--c-color);
    font-size: 1.5rem;
  }

  ol {
    list-style: decimal;
    padding-left: 20px;

    li {
      margin-bottom: 12px;

      a {
        color: #333;
        text-decoration: none;
        transition: all 0.3s;
        font-weight: 500;

        &:hover {
          color: var(--c-color);
          padding-left: 5px;
        }
      }

      ul {
        list-style: disc;
        padding-left: 20px;
        margin-top: 8px;
        color: #666;
        font-size: 0.9rem;

        li {
          margin-bottom: 5px;
        }
      }
    }
  }
}

.article-section {
  margin-bottom: 80px;

  // セクション間に視覚的な区切りを追加
  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, var(--c-color), transparent);
    margin: 60px auto 0;
  }

  h2 {
    color: var(--c-color);
    margin-bottom: 35px;
    padding-bottom: 15px;
    border-bottom: 3px solid var(--c-color);
    font-size: 2rem;
    position: relative;

    // 装飾的な要素を追加
    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--c-color-dark, #4a5f7a);
    }
  }

  h3 {
    color: #2c3e50;
    margin: 40px 0 25px;
    font-size: 1.4rem;
    padding: 10px 0 10px 20px;
    border-left: 4px solid var(--c-color);
    background: linear-gradient(to right, rgba(92, 107, 192, 0.05), transparent);
  }

  p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #333;
  }

  // コードブロックのスタイル改善
  pre {
    margin: 25px 0;
    border-radius: 10px;
    overflow-x: auto;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border: 1px solid rgba(92, 107, 192, 0.2);
    position: relative;

    // 言語ラベルを追加
    &[class*="language-"]::before {
      content: attr(class);
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 12px;
      background: var(--c-color);
      color: white;
      font-size: 0.8rem;
      border-radius: 0 8px 0 8px;
      text-transform: uppercase;
      font-weight: 600;
    }

    &[class*="language-c"]::before {
      content: 'C';
    }

    &[class*="language-bash"]::before {
      content: 'BASH';
      background: #4a5f7a;
    }

    code {
      background: #1e2937 !important;  // より濃い背景色
      color: #e0e6ed !important;
      padding: 20px 24px !important;
      display: block;
      font-size: 0.95rem;
      line-height: 1.6;

      // シンタックスハイライトの色調整
      .token.comment {
        color: #6b7280;
      }

      .token.keyword {
        color: #60a5fa;
      }

      .token.string {
        color: #34d399;
      }

      .token.function {
        color: #fbbf24;
      }

      .token.number {
        color: #f87171;
      }
    }
  }

  // インラインコード
  code:not(pre code) {
    background-color: #e8eaf0e9;
    color: var(--c-color-dark, #4a5f7a);
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: 500;
    border: 1px solid rgba(92, 107, 192, 0.2);
  }

  ul, ol {
    padding-left: 30px;
    margin-bottom: 25px;

    li {
      margin-bottom: 12px;
      line-height: 1.8;

      // ネストしたリストのスタイル
      ul, ol {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  // リストマーカーのカスタマイズ
  ul {
    li::marker {
      color: var(--c-color);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border-radius: 8px;
    overflow: hidden;

    th, td {
      border: 1px solid #e0e3e8;
      padding: 14px 16px;
      text-align: left;
    }

    th {
      background-color: var(--c-color);
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }

    tr:nth-child(even) {
      background-color: #f8f9fa;
    }

    tr:hover {
      background-color: #f0f2f5;
    }

    code {
      background-color: #e8eaf0;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.9em;
    }
  }
}

// ノートボックスのスタイル改善
.note {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-left: 5px solid #2196f3;
  padding: 25px;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(33, 150, 243, 0.15);
  position: relative;

  &::before {
    content: '💡';
    position: absolute;
    top: 25px;
    left: -15px;
    background: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  strong {
    color: #1976d2;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 10px;
    padding-left: 20px;
  }
}

.warning {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 5px solid #ff9800;
  padding: 25px;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(255, 152, 0, 0.15);
  position: relative;

  &::before {
    content: '⚠️';
    position: absolute;
    top: 25px;
    left: -15px;
    background: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  strong {
    color: #f57c00;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 10px;
    padding-left: 20px;
  }
}

// セクション内のサブセクションの区切り
.article-section {
  > div {
    > h3:not(:first-child) {
      margin-top: 50px;

      // サブセクション間の区切り線
      &::before {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background: #ddd;
        margin: 0 0 30px 0;
      }
    }
  }
}

// コードブロック間の間隔
pre + p,
pre + h3,
pre + ul,
pre + ol {
  margin-top: 35px;
}

p + pre,
ul + pre,
ol + pre {
  margin-top: 25px;
}

// レスポンシブ対応
@media (max-width: 768px) {
  .article-header {
    padding: 30px 20px;

    h1 {
      font-size: 2rem;
    }

    .article-meta {
      font-size: 1rem;
    }
  }

  .article-section {
    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.2rem;
      padding-left: 15px;
    }

    pre {
      margin: 20px -15px;
      border-radius: 0;

      code {
        padding: 15px !important;
        font-size: 0.85rem;
      }
    }
  }
}
</style>
