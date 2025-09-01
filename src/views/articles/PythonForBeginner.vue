<template>
  <div class="article-container">
    <article class="article-content">
      <header class="article-header">
        <h1>Python 完全学習ガイド</h1>
        <p class="article-meta">初心者から上級者まで、Pythonを体系的に学習できる完全ガイド</p>
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
  name: 'PythonForBeginner',
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
        subsections: ['Pythonのインストール', '仮想環境の作成', 'パッケージ管理']
      },
      {
        id: 'section2',
        title: '2. 基本操作',
        subsections: ['対話モードとスクリプト実行', '基本的な入出力']
      },
      {
        id: 'section3',
        title: '3. 変数とデータ型',
        subsections: ['変数の基本', '基本データ型']
      },
      {
        id: 'section4',
        title: '4. 配列（リスト・タプル・辞書）',
        subsections: ['リスト（可変）', 'タプル（不変）', '辞書（キーと値のペア）', 'セット（重複なし）']
      },
      {
        id: 'section5',
        title: '5. 演算',
        subsections: ['算術演算子', '文字列演算', 'ビット演算子']
      },
      {
        id: 'section6',
        title: '6. 論理演算',
        subsections: ['比較演算子', '論理演算子', '真偽値の扱い']
      },
      {
        id: 'section7',
        title: '7. よく使う関数',
        subsections: ['組み込み関数', '文字列メソッド', 'リストメソッド', '数学関数（mathモジュール）']
      },
      {
        id: 'section8',
        title: '8. 制御構文',
        subsections: ['if文（条件分岐）', 'for文（繰り返し）', 'while文', '制御フロー文', '例外処理']
      },
      {
        id: 'section9',
        title: '9. 関数定義',
        subsections: ['基本的な関数定義', '引数の種類', '高度な関数機能', 'スコープとクロージャ']
      },
      {
        id: 'section10',
        title: '10. クラス定義',
        subsections: ['基本的なクラス定義', '継承とポリモーフィズム', '特殊メソッド', 'プロパティとクラスメソッド']
      },
      {
        id: 'section11',
        title: '11. Tips',
        subsections: ['Pythonicなコード', '便利な標準ライブラリ', 'デバッグとテスト', 'パフォーマンス最適化']
      }
    ]

    const sectionsContent = [
      {
        id: 'section1',
        title: '1. 環境構築',
        content: `
          <p>Pythonの開発環境を整えましょう。</p>

          <h3>Pythonのインストール</h3>
          <pre><code class="language-python"># Windows
# python.orgから最新版をダウンロード
# インストール時に"Add Python to PATH"にチェック

# macOS (Homebrewを使用)
brew install python3

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install python3 python3-pip

# バージョン確認
python --version  # または python3 --version</code></pre>

          <h3>仮想環境の作成</h3>
          <pre><code class="language-python"># 仮想環境の作成
python -m venv myenv

# 仮想環境の有効化
# Windows
myenv\\Scripts\\activate
# macOS/Linux
source myenv/bin/activate

# 仮想環境の無効化
deactivate</code></pre>

          <h3>パッケージ管理</h3>
          <pre><code class="language-python"># pipのアップグレード
pip install --upgrade pip

# パッケージのインストール
pip install numpy pandas matplotlib

# requirements.txtの作成と使用
pip freeze > requirements.txt
pip install -r requirements.txt</code></pre>
        `
      },
      {
        id: 'section2',
        title: '2. 基本操作',
        content: `
          <p>Pythonの基本的な使い方を学びます。</p>

          <h3>対話モードとスクリプト実行</h3>
          <pre><code class="language-python"># 対話モード（REPL）の起動
python
>>> print("Hello, Python!")
>>> 2 + 3
>>> exit()  # または Ctrl+D

# スクリプトファイルの実行
python script.py

# スクリプトファイルの作成例 (hello.py)
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

print("こんにちは、Python！")</code></pre>

          <h3>基本的な入出力</h3>
          <pre><code class="language-python"># 出力
print("Hello, World!")
print("値:", 42, "個")
print(f"計算結果: {10 + 20}")

# 入力
name = input("名前を入力してください: ")
age = int(input("年齢を入力してください: "))

# ファイル操作
# 書き込み
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Pythonファイル操作\\n")

# 読み込み
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)</code></pre>
        `
      },
      {
        id: 'section3',
        title: '3. 変数とデータ型',
        content: `
          <p>Pythonの変数宣言とデータ型について詳しく学びます。</p>

          <h3>変数の基本</h3>
          <pre><code class="language-python"># 変数の宣言（型宣言不要）
name = "Python"
age = 30
height = 175.5
is_student = False

# 複数代入
x, y, z = 10, 20, 30
a = b = c = 0

# 変数の命名規則
user_name = "snake_case推奨"
MAX_SIZE = 100  # 定数は大文字
_private = "アンダースコアで始まる"</code></pre>

          <h3>基本データ型</h3>
          <pre><code class="language-python"># 数値型
integer = 42
float_num = 3.14
complex_num = 3 + 4j

# 文字列型
single = 'シングルクォート'
double = "ダブルクォート"
triple = """複数行
文字列"""
raw = r"エスケープなし\\n"

# 真偽値型
is_valid = True
is_empty = False

# None型
result = None

# 型確認と変換
print(type(42))          # <class 'int'>
str_num = str(123)       # "123"
int_str = int("456")     # 456
float_str = float("3.14") # 3.14</code></pre>
        `
      },
      {
        id: 'section4',
        title: '4. 配列（リスト・タプル・辞書）',
        content: `
          <p>Pythonのコレクション型データ構造を学びます。</p>

          <h3>リスト（可変）</h3>
          <pre><code class="language-python"># リストの作成
fruits = ["りんご", "バナナ", "オレンジ"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, True]

# 要素へのアクセス
print(fruits[0])     # "りんご"
print(fruits[-1])    # "オレンジ"（末尾）
print(fruits[1:3])   # ["バナナ", "オレンジ"]

# リストの操作
fruits.append("ぶどう")      # 末尾に追加
fruits.insert(1, "いちご")   # 指定位置に挿入
fruits.remove("バナナ")      # 値を指定して削除
popped = fruits.pop()        # 末尾を削除して取得
fruits.extend(["メロン", "桃"]) # 複数要素を追加

# リスト内包表記
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]</code></pre>

          <h3>タプル（不変）</h3>
          <pre><code class="language-python"># タプルの作成
coordinates = (10, 20)
rgb = (255, 128, 0)
single = (42,)  # 要素1つの場合はカンマ必須

# アンパック
x, y = coordinates
r, g, b = rgb

# 名前付きタプル
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)</code></pre>

          <h3>辞書（キーと値のペア）</h3>
          <pre><code class="language-python"># 辞書の作成
person = {
    "name": "田中",
    "age": 25,
    "city": "東京"
}

# 要素へのアクセス
print(person["name"])
print(person.get("age", 0))  # デフォルト値付き

# 辞書の操作
person["email"] = "tanaka@example.com"  # 追加/更新
del person["city"]  # 削除
keys = person.keys()    # キー一覧
values = person.values() # 値一覧
items = person.items()   # (キー, 値)のペア

# 辞書内包表記
squares_dict = {x: x**2 for x in range(5)}</code></pre>

          <h3>セット（重複なし）</h3>
          <pre><code class="language-python"># セットの作成
numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}
empty_set = set()

# セット演算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)  # 和集合 {1, 2, 3, 4, 5, 6}
print(a & b)  # 積集合 {3, 4}
print(a - b)  # 差集合 {1, 2}
print(a ^ b)  # 対称差 {1, 2, 5, 6}</code></pre>
        `
      },
      {
        id: 'section5',
        title: '5. 演算',
        content: `
          <p>Pythonの各種演算子について学びます。</p>

          <h3>算術演算子</h3>
          <pre><code class="language-python"># 基本演算
a, b = 10, 3
print(a + b)   # 13 加算
print(a - b)   # 7  減算
print(a * b)   # 30 乗算
print(a / b)   # 3.333... 除算
print(a // b)  # 3  整数除算
print(a % b)   # 1  剰余
print(a ** b)  # 1000 べき乗

# 複合代入演算子
x = 10
x += 5   # x = x + 5
x -= 3   # x = x - 3
x *= 2   # x = x * 2
x //= 4  # x = x // 4</code></pre>

          <h3>文字列演算</h3>
          <pre><code class="language-python"># 文字列の連結と繰り返し
str1 = "Hello"
str2 = "World"
print(str1 + " " + str2)  # "Hello World"
print(str1 * 3)           # "HelloHelloHello"

# フォーマット文字列
name = "Python"
version = 3.9
print(f"{name} {version}")  # f-string（推奨）
print("{} {}".format(name, version))  # format()
print("%s %.1f" % (name, version))    # 古い形式</code></pre>

          <h3>ビット演算子</h3>
          <pre><code class="language-python"># ビット演算
a, b = 60, 13  # 60 = 0011 1100, 13 = 0000 1101
print(a & b)   # 12  AND
print(a | b)   # 61  OR
print(a ^ b)   # 49  XOR
print(~a)      # -61 NOT
print(a << 2)  # 240 左シフト
print(a >> 2)  # 15  右シフト</code></pre>
        `
      },
      {
        id: 'section6',
        title: '6. 論理演算',
        content: `
          <p>条件判定に使用する論理演算を学びます。</p>

          <h3>比較演算子</h3>
          <pre><code class="language-python"># 比較演算
x, y = 10, 20
print(x == y)   # False 等しい
print(x != y)   # True  等しくない
print(x < y)    # True  より小さい
print(x > y)    # False より大きい
print(x <= y)   # True  以下
print(x >= y)   # False 以上

# 文字列の比較
print("apple" < "banana")  # True（辞書順）
print("ABC" < "abc")       # True（大文字が先）

# オブジェクトの同一性
a = [1, 2, 3]
b = [1, 2, 3]
c = a
print(a == b)  # True  値が等しい
print(a is b)  # False 同じオブジェクトではない
print(a is c)  # True  同じオブジェクト</code></pre>

          <h3>論理演算子</h3>
          <pre><code class="language-python"># and, or, not
age = 25
has_license = True

# and演算（両方True）
if age >= 18 and has_license:
    print("運転できます")

# or演算（どちらかTrue）
is_weekend = True
is_holiday = False
if is_weekend or is_holiday:
    print("休日です")

# not演算（否定）
is_busy = False
if not is_busy:
    print("時間があります")

# 短絡評価
result = x > 0 and (100 / x) > 5  # xが0以下なら後半は評価されない</code></pre>

          <h3>真偽値の扱い</h3>
          <pre><code class="language-python"># Truthyな値とFalsyな値
# Falsy: False, None, 0, 0.0, "", [], {}, set()
# Truthy: それ以外すべて

# 例
values = [0, 1, "", "text", [], [1], None, True]
for val in values:
    if val:
        print(f"{val} is Truthy")
    else:
        print(f"{val} is Falsy")

# 三項演算子
age = 20
status = "成人" if age >= 18 else "未成年"

# any()とall()
numbers = [1, 2, 0, 4]
print(any(numbers))  # True（1つでもTruthy）
print(all(numbers))  # False（すべてTruthyではない）</code></pre>
        `
      },
      {
        id: 'section7',
        title: '7. よく使う関数',
        content: `
          <p>Pythonの組み込み関数と標準ライブラリの重要な関数を学びます。</p>

          <h3>組み込み関数</h3>
          <pre><code class="language-python"># 型変換・型確認
int("123")      # 文字列→整数
float("3.14")   # 文字列→浮動小数点
str(123)        # 数値→文字列
list("ABC")     # ['A', 'B', 'C']
type(42)        # <class 'int'>
isinstance(42, int)  # True

# 数値関数
abs(-10)        # 10（絶対値）
round(3.14159, 2)  # 3.14（四捨五入）
min(1, 2, 3)    # 1
max([1, 2, 3])  # 3
sum([1, 2, 3])  # 6
pow(2, 3)       # 8（2の3乗）

# シーケンス関数
len([1, 2, 3])  # 3（長さ）
sorted([3, 1, 2])  # [1, 2, 3]
reversed([1, 2, 3])  # 逆順イテレータ
enumerate(['a', 'b', 'c'])  # インデックス付き
zip([1, 2], ['a', 'b'])  # [(1, 'a'), (2, 'b')]

# その他
print("Hello")
input("入力: ")
range(10)       # 0から9まで
open("file.txt")
help(print)     # ヘルプ表示</code></pre>

          <h3>文字列メソッド</h3>
          <pre><code class="language-python">text = "  Hello, Python World!  "

# 変換
text.upper()        # "  HELLO, PYTHON WORLD!  "
text.lower()        # "  hello, python world!  "
text.title()        # "  Hello, Python World!  "
text.strip()        # "Hello, Python World!"
text.replace("Python", "Java")  # "  Hello, Java World!  "

# 検索・判定
text.find("Python")    # 9（インデックス）
text.count("o")        # 2
text.startswith("  H") # True
text.endswith("!  ")   # True
"123".isdigit()        # True
"abc".isalpha()        # True

# 分割・結合
words = text.strip().split(", ")  # ['Hello', 'Python World!']
"-".join(['A', 'B', 'C'])  # "A-B-C"</code></pre>

          <h3>リストメソッド</h3>
          <pre><code class="language-python">numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# 追加・削除
numbers.append(5)      # 末尾に追加
numbers.extend([3, 5]) # 複数追加
numbers.insert(0, 0)   # 指定位置に挿入
numbers.remove(1)      # 最初の1を削除
numbers.pop()          # 末尾を削除
numbers.clear()        # すべて削除

# 検索・カウント
numbers.index(4)       # 2（インデックス）
numbers.count(1)       # 1（出現回数）

# ソート・反転
numbers.sort()         # 昇順ソート（破壊的）
numbers.sort(reverse=True)  # 降順ソート
numbers.reverse()      # 反転

# コピー
copy = numbers.copy()  # 浅いコピー</code></pre>

          <h3>数学関数（mathモジュール）</h3>
          <pre><code class="language-python">import math

# 基本的な数学関数
math.sqrt(16)      # 4.0（平方根）
math.ceil(3.2)     # 4（切り上げ）
math.floor(3.8)    # 3（切り下げ）
math.factorial(5)  # 120（階乗）

# 三角関数
math.sin(math.pi / 2)  # 1.0
math.cos(0)            # 1.0
math.tan(math.pi / 4)  # 1.0

# 対数・指数
math.log(10)       # 自然対数
math.log10(100)    # 2.0（常用対数）
math.exp(1)        # e（ネイピア数）

# 定数
math.pi            # 3.141592...
math.e             # 2.718281...</code></pre>
        `
      },
      {
        id: 'section8',
        title: '8. 制御構文',
        content: `
          <p>プログラムの流れを制御する構文を学びます。</p>

          <h3>if文（条件分岐）</h3>
          <pre><code class="language-python"># 基本的なif文
age = 20
if age >= 18:
    print("成人です")
else:
    print("未成年です")

# elif（複数条件）
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

# ネストしたif文
is_member = True
purchase = 5000
if is_member:
    if purchase >= 3000:
        discount = 0.2
    else:
        discount = 0.1
else:
    discount = 0

# 条件式（三項演算子）
status = "合格" if score >= 60 else "不合格"</code></pre>

          <h3>for文（繰り返し）</h3>
          <pre><code class="language-python"># 基本的なfor文
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# リストの反復
fruits = ["りんご", "バナナ", "オレンジ"]
for fruit in fruits:
    print(fruit)

# インデックス付き反復
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# 辞書の反復
person = {"name": "田中", "age": 25}
for key, value in person.items():
    print(f"{key}: {value}")

# ネストしたループ
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()  # 改行</code></pre>

          <h3>while文</h3>
          <pre><code class="language-python"># 基本的なwhile文
count = 0
while count < 5:
    print(count)
    count += 1

# 無限ループとbreak
while True:
    user_input = input("終了するには'q'を入力: ")
    if user_input == 'q':
        break
    print(f"入力: {user_input}")

# continueの使用
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue  # 偶数はスキップ
    print(i)  # 奇数のみ出力</code></pre>

          <h3>制御フロー文</h3>
          <pre><code class="language-python"># break（ループを抜ける）
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue（次の反復へ）
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# else節（ループが正常終了した場合）
for i in range(5):
    if i == 10:  # 実行されない
        break
else:
    print("ループが正常終了しました")

# pass（何もしない）
for i in range(3):
    if i == 1:
        pass  # 後で実装予定
    else:
        print(i)</code></pre>

          <h3>例外処理</h3>
          <pre><code class="language-python"># 基本的な例外処理
try:
    result = 10 / 0
except ZeroDivisionError:
    print("ゼロで除算はできません")

# 複数の例外
try:
    num = int(input("数値を入力: "))
    result = 10 / num
except ValueError:
    print("無効な入力です")
except ZeroDivisionError:
    print("ゼロで除算はできません")
except Exception as e:
    print(f"エラーが発生しました: {e}")

# else節とfinally節
try:
    file = open("data.txt", "r")
except FileNotFoundError:
    print("ファイルが見つかりません")
else:
    print("ファイルを正常に開きました")
    file.close()
finally:
    print("処理を終了します")</code></pre>
        `
      },
      {
        id: 'section9',
        title: '9. 関数定義',
        content: `
          <p>関数の定義と使い方を学びます。</p>

          <h3>基本的な関数定義</h3>
          <pre><code class="language-python"># シンプルな関数
def greet():
    print("こんにちは！")

greet()  # 関数の呼び出し

# 引数を持つ関数
def greet_person(name):
    print(f"こんにちは、{name}さん！")

greet_person("田中")

# 戻り値を持つ関数
def add(a, b):
    return a + b

result = add(3, 5)  # 8

# 複数の戻り値
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 5, 3, 9, 2])</code></pre>

          <h3>引数の種類</h3>
          <pre><code class="language-python"># デフォルト引数
def greet(name, greeting="こんにちは"):
    print(f"{greeting}、{name}さん！")

greet("田中")  # "こんにちは、田中さん！"
greet("山田", "おはよう")  # "おはよう、山田さん！"

# キーワード引数
def create_profile(name, age, city="東京"):
    return {"name": name, "age": age, "city": city}

profile = create_profile(age=25, name="田中")  # 順序を変えられる

# 可変長引数（*args）
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15

# キーワード可変長引数（**kwargs）
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="田中", age=25, city="東京")</code></pre>

          <h3>高度な関数機能</h3>
          <pre><code class="language-python"># ラムダ式（無名関数）
square = lambda x: x ** 2
print(square(5))  # 25

# map関数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))  # [1, 4, 9, 16, 25]

# filter関数
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# reduce関数
from functools import reduce
product = reduce(lambda x, y: x * y, numbers)  # 120

# デコレータ
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__}の実行時間: {end - start}秒")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "完了"</code></pre>

          <h3>スコープとクロージャ</h3>
          <pre><code class="language-python"># スコープ
global_var = "グローバル"

def outer():
    outer_var = "外側"

    def inner():
        inner_var = "内側"
        print(global_var)  # アクセス可能
        print(outer_var)   # アクセス可能
        print(inner_var)   # アクセス可能

    inner()

# クロージャ
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter1 = counter()
print(counter1())  # 1
print(counter1())  # 2</code></pre>
        `
      },
      {
        id: 'section10',
        title: '10. クラス定義',
        content: `
          <p>オブジェクト指向プログラミングの基本を学びます。</p>

          <h3>基本的なクラス定義</h3>
          <pre><code class="language-python"># シンプルなクラス
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"こんにちは、{self.name}です。{self.age}歳です。")

    def have_birthday(self):
        self.age += 1
        print(f"{self.name}さんは{self.age}歳になりました！")

# インスタンスの作成と使用
person1 = Person("田中", 25)
person1.greet()
person1.have_birthday()</code></pre>

          <h3>継承とポリモーフィズム</h3>
          <pre><code class="language-python"># 基底クラス
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

# 派生クラス
class Dog(Animal):
    def speak(self):
        return f"{self.name}：ワンワン！"

class Cat(Animal):
    def speak(self):
        return f"{self.name}：ニャー！"

# ポリモーフィズム
animals = [Dog("ポチ"), Cat("タマ"), Dog("ハチ")]
for animal in animals:
    print(animal.speak())</code></pre>

          <h3>特殊メソッド</h3>
          <pre><code class="language-python">class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return int((self.x ** 2 + self.y ** 2) ** 0.5)

# 使用例
v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = v1 + v2  # __add__が呼ばれる
print(v3)     # __str__が呼ばれる
print(len(v1))  # __len__が呼ばれる</code></pre>

          <h3>プロパティとクラスメソッド</h3>
          <pre><code class="language-python">class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("絶対零度以下は設定できません")
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

    @classmethod
    def from_fahrenheit(cls, fahrenheit):
        celsius = (fahrenheit - 32) * 5/9
        return cls(celsius)

    @staticmethod
    def celsius_to_kelvin(celsius):
        return celsius + 273.15

# 使用例
temp = Temperature(25)
print(temp.fahrenheit)  # 77.0
temp.celsius = 30  # setterが呼ばれる
temp2 = Temperature.from_fahrenheit(86)  # クラスメソッド</code></pre>
        `
      },
      {
        id: 'section11',
        title: '11. Tips',
        content: `
          <p>Pythonをより効果的に使うためのヒントとテクニックです。</p>

          <h3>Pythonic なコード</h3>
          <pre><code class="language-python"># リスト内包表記
# 悪い例
squares = []
for i in range(10):
    squares.append(i ** 2)

# 良い例
squares = [i ** 2 for i in range(10)]

# 条件付きリスト内包表記
evens = [i for i in range(20) if i % 2 == 0]

# 辞書内包表記
word_lengths = {word: len(word) for word in ["apple", "banana", "cherry"]}

# ジェネレータ式（メモリ効率的）
sum_squares = sum(i ** 2 for i in range(1000000))</code></pre>

          <h3>便利な標準ライブラリ</h3>
          <pre><code class="language-python"># collections
from collections import Counter, defaultdict, deque

# Counter（要素の出現回数）
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = Counter(words)
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# defaultdict（デフォルト値付き辞書）
dd = defaultdict(list)
dd["fruits"].append("apple")  # キーが存在しなくても大丈夫

# itertools
import itertools

# 組み合わせ・順列
list(itertools.combinations([1, 2, 3], 2))  # [(1, 2), (1, 3), (2, 3)]
list(itertools.permutations([1, 2, 3], 2))  # [(1, 2), (1, 3), (2, 1), ...]

# 無限イテレータ
for i in itertools.count(10, 2):  # 10から2ずつ増加
    if i > 20:
        break
    print(i)</code></pre>

          <h3>デバッグとテスト</h3>
          <pre><code class="language-python"># print デバッグ
def calculate(x, y):
    print(f"Debug: x={x}, y={y}")  # デバッグ用
    result = x * y + 10
    print(f"Debug: result={result}")
    return result

# assert文
def divide(a, b):
    assert b != 0, "除数はゼロにできません"
    return a / b

# 単体テスト
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(2 + 2, 4)

    def test_divide(self):
        self.assertEqual(10 / 2, 5)
        with self.assertRaises(ZeroDivisionError):
            10 / 0

# pdb デバッガ
import pdb
# pdb.set_trace()  # ブレークポイント</code></pre>

          <h3>パフォーマンス最適化</h3>
          <pre><code class="language-python"># 時間計測
import time

start = time.time()
# 処理
end = time.time()
print(f"実行時間: {end - start}秒")

# より詳細な計測
import timeit
code = "sum([i ** 2 for i in range(1000)])"
time = timeit.timeit(code, number=1000)
print(f"平均実行時間: {time / 1000}秒")

# メモリ効率
# 悪い例：すべてをメモリに読み込む
with open("large_file.txt") as f:
    lines = f.readlines()  # 全行をリストに

# 良い例：ジェネレータを使う
def read_large_file(file_path):
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# キャッシュ（メモ化）
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)</code></pre>

          <div class="note">
            <strong>ベストプラクティス：</strong>
            <ul>
              <li>PEP 8（Pythonコーディング規約）に従う</li>
              <li>意味のある変数名を使用する</li>
              <li>適切なコメントとドキュメント文字列を書く</li>
              <li>例外処理を適切に行う</li>
              <li>テストを書く習慣をつける</li>
            </ul>
          </div>
        `
      }
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
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;

  h1 {
    font-size: 2.5rem;
    color: var(--python-color);
    margin-bottom: 20px;
  }

  .article-meta {
    font-size: 1.2rem;
    color: #666;
  }
}

.table-of-contents {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  h2 {
    margin-bottom: 20px;
    color: var(--python-color);
    font-size: 1.5rem;
  }

  ol {
    list-style: decimal;
    padding-left: 20px;

    li {
      margin-bottom: 10px;

      a {
        color: #333;
        text-decoration: none;
        transition: all 0.3s;
        font-weight: 500;

        &:hover {
          color: var(--python-color);
          padding-left: 5px;
        }
      }

      ul {
        list-style: disc;
        padding-left: 20px;
        margin-top: 5px;
        color: #666;
        font-size: 0.9rem;
      }
    }
  }
}

.article-section {
  margin-bottom: 60px;

  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, var(--python-color), transparent);
    margin: 50px auto 0;
  }

  h2 {
    color: var(--python-color);
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
    font-size: 1.8rem;
  }

  h3 {
    color: #333;
    margin: 30px 0 20px;
    font-size: 1.3rem;
    padding-left: 10px;
    border-left: 3px solid var(--python-color);
  }

  p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #333;
  }

  pre {
    margin: 20px 0;
    border-radius: 8px;
    overflow-x: auto;
    background: #282c34;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);

    code {
      background: transparent !important;
      color: #abb2bf !important;
      padding: 20px !important;
      display: block;
      font-size: 0.95rem;
      line-height: 1.6;

      // Python syntax highlighting colors
      .token.comment {
        color: #5c6370;
      }
      .token.keyword {
        color: #c678dd;
      }
      .token.string {
        color: #98c379;
      }
      .token.function {
        color: #61afef;
      }
      .token.number {
        color: #d19a66;
      }
      .token.operator {
        color: #56b6c2;
      }
      .token.decorator {
        color: #e06c75;
      }
    }
  }

  code:not(pre code) {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    color: #e83e8c;
  }

  ul, ol {
    padding-left: 30px;
    margin-bottom: 20px;

    li {
      margin-bottom: 10px;
      line-height: 1.8;

      strong {
        color: var(--python-color-dark, #2e5090);
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);

    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }

    th {
      background-color: var(--python-color);
      color: white;
      font-weight: 600;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    code {
      background-color: #f5f5f5;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
  }
}

.note {
  background-color: #e8f5e9;
  border-left: 4px solid var(--python-color);
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;

  strong {
    color: var(--python-color);
  }

  ul {
    margin-top: 10px;
  }
}

.warning {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;

  strong {
    color: #ff6f00;
  }
}

// レスポンシブ対応
@media (max-width: 768px) {
  .article-header {
    padding: 25px 20px;

    h1 {
      font-size: 1.8rem;
    }

    .article-meta {
      font-size: 1rem;
    }
  }

  .table-of-contents {
    padding: 20px;

    h2 {
      font-size: 1.3rem;
    }
  }

  .article-section {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    table {
      font-size: 0.9rem;

      th, td {
        padding: 8px;
      }
    }

    pre code {
      font-size: 0.85rem !important;
      padding: 15px !important;
    }
  }
}
</style>
