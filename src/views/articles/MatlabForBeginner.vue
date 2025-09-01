<!-- @/src/views/articles/MatlabForBeginner.vue -->
<template>
  <div class="article-container">
    <article class="article-content">
      <header class="article-header">
        <h1>初心者向けMATLABの使い方まとめ</h1>
        <p class="article-meta">これからMATLABを始める方のための包括的なガイドです。基本操作から実践的な技術まで、効率的に学習できるようにまとめました。</p>
      </header>

      <section class="article-section" id="introduction">
        <h2>はじめに</h2>
        <p>MATLAB（MATrix LABoratory）は、数値計算とデータ可視化のための強力なプログラミング環境です。工学、科学、金融などの分野で広く使用されており、行列演算を得意とする特徴があります。本記事では、MATLAB初心者が効率的に学習できるよう、必要な知識を体系的にまとめています。</p>
      </section>

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
import { ref, onMounted, nextTick } from 'vue'
import SidebarToc from '@/components/common/SidebarToc.vue'
import MobileTocToggle from '@/components/common/MobileTocToggle.vue'
import { useCodeHighlight } from '@/composables/useCodeHighlight'

export default {
  name: 'MatlabForBeginner',
  components: {
    SidebarToc,
    MobileTocToggle
  },
  setup() {
    const isTocActive = ref(false)
    const { highlightCode } = useCodeHighlight()

    const sections = [
      { id: 'introduction', title: 'はじめに' },
      { id: 'section1', title: '1. MATLABの基本環境' },
      { id: 'section2', title: '2. 基本操作' },
      { id: 'section3', title: '3. 変数とデータ型' },
      { id: 'section4', title: '4. 配列と行列' },
      { id: 'section5', title: '5. 基本的な演算' },
      { id: 'section6', title: '6. 数学関数' },
      { id: 'section7', title: '7. 制御構造' },
      { id: 'section8', title: '8. 関数の作成' },
      { id: 'section9', title: '9. データの可視化' },
      { id: 'section10', title: '10. ファイル操作' },
      { id: 'section11', title: '11. デバッグとエラー処理' },
      { id: 'section12', title: '12. 実践的なTips' },
      { id: 'section13', title: '13. 学習リソース' },
      { id: 'section14', title: '14. まとめ' }
    ]

    const sectionsContent = [
      {
        id: 'section1',
        title: '1. MATLABの基本環境',
        content: `
          <h3>1.1 インストールと起動</h3>
          <p>MATLABを使用するには、まずMathWorks社のウェブサイトから製品をダウンロードし、インストールする必要があります。学生版やトライアル版も利用可能です。また、MATLAB Onlineを使用すれば、ブラウザ上で直接MATLABを使用することも可能です。</p>
          <p><a href="https://matlab.mathworks.com/" target="_blank">https://matlab.mathworks.com/</a></p>

          <h3>1.2 MATLABデスクトップ環境</h3>
          <p>MATLABのデスクトップ環境は以下の主要な要素から構成されています：</p>
          <ul>
            <li><strong>コマンドウィンドウ</strong>：MATLABコマンドを直接入力・実行する場所</li>
            <li><strong>ワークスペース</strong>：現在使用中の変数とその値を表示</li>
            <li><strong>現在のフォルダー</strong>：ファイルの管理と操作</li>
            <li><strong>コマンド履歴</strong>：過去に実行したコマンドの記録</li>
            <li><strong>エディター</strong>：スクリプト（.mファイル）の作成・編集</li>
          </ul>
        `
      },
      {
        id: 'section2',
        title: '2. 基本操作',
        content: `
          <h3>2.1 コマンドの実行</h3>
          <p>MATLABでは、コマンドウィンドウの <code>&gt;&gt;</code> プロンプトに続いてコマンドを入力し、Enterキーを押すことで実行します。</p>

          <pre><code class="language-matlab">&gt;&gt; 2 + 3
ans = 5

&gt;&gt; x = 10
x = 10</code></pre>

          <h3>2.2 基本的なコマンド</h3>
          <table>
            <thead>
              <tr>
                <th>コマンド</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>clc</code></td>
                <td>コマンドウィンドウをクリア</td>
                <td><code>clc</code></td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td>ワークスペースの変数をクリア</td>
                <td><code>clear</code> または <code>clear x</code></td>
              </tr>
              <tr>
                <td><code>who</code></td>
                <td>現在の変数を表示</td>
                <td><code>who</code></td>
              </tr>
              <tr>
                <td><code>whos</code></td>
                <td>変数の詳細情報を表示</td>
                <td><code>whos</code></td>
              </tr>
              <tr>
                <td><code>help</code></td>
                <td>関数のヘルプを表示</td>
                <td><code>help sin</code></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: 'section3',
        title: '3. 変数とデータ型',
        content: `
          <h3>3.1 変数の定義</h3>
          <pre><code class="language-matlab">a    = 5;           % 数値（スカラー）
name = 'MATLAB';    % 文字列（文字配列）
str  = "Hello";     % 文字列（string 型）
flag = true;        % 論理値</code></pre>

          <div class="note">
            <strong>ポイント：</strong> 行末にセミコロン（;）を付けると、結果が表示されません。これは長い計算や大きなデータを扱う際に便利です。
          </div>

          <h3>3.2 基本的なデータ型</h3>
          <ul>
            <li><strong>数値型（double）</strong>：既定の数値型、倍精度浮動小数点</li>
            <li><strong>文字型（char）</strong>：単一引用符で囲まれた文字列</li>
            <li><strong>文字列型（string）</strong>：二重引用符で囲まれた文字列</li>
            <li><strong>論理型（logical）</strong>：true/falseの値</li>
            <li><strong>整数型</strong>：int8, int16, int32, int64, uint8など</li>
          </ul>
        `
      },
      {
        id: 'section4',
        title: '4. 配列と行列',
        content: `
          <h3>4.1 配列の作成</h3>
          <p>MATLABの最大の特徴は、すべてのデータが配列（行列）として扱われることです。</p>

          <pre><code class="language-matlab">% 行ベクトル
row_vector = [1, 2, 3, 4, 5];
% または
row_vector = [1 2 3 4 5];

% 列ベクトル
col_vector = [1; 2; 3; 4; 5];

% 行列
matrix = [1 2 3; 4 5 6; 7 8 9];</code></pre>

          <h3>4.2 特殊な行列の作成</h3>
          <table>
            <thead>
              <tr>
                <th>関数</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>zeros(m,n)</code></td>
                <td>m×nの零行列</td>
                <td><code>zeros(3,3)</code></td>
              </tr>
              <tr>
                <td><code>ones(m,n)</code></td>
                <td>m×nの1行列</td>
                <td><code>ones(2,4)</code></td>
              </tr>
              <tr>
                <td><code>eye(n)</code></td>
                <td>n×nの単位行列</td>
                <td><code>eye(3)</code></td>
              </tr>
              <tr>
                <td><code>rand(m,n)</code></td>
                <td>m×nの乱数行列（0-1の一様分布）</td>
                <td><code>rand(2,3)</code></td>
              </tr>
              <tr>
                <td><code>randn(m,n)</code></td>
                <td>m×nの乱数行列（標準正規分布）</td>
                <td><code>randn(2,3)</code></td>
              </tr>
            </tbody>
          </table>

          <h3>4.3 数列の作成</h3>
          <pre><code class="language-matlab">% コロンを使用した数列
x = 1:10;           % 1から10まで1刻み
y = 0:0.5:5;        % 0から5まで0.5刻み
z = 10:-1:1;        % 10から1まで-1刻み（逆順）

% linspace関数
t = linspace(0, 2*pi, 100);  % 0から2πまで100等分</code></pre>

          <h3>4.4 行列要素へのアクセス</h3>
          <pre><code class="language-matlab">A = [1 2 3; 4 5 6; 7 8 9];

% 個別要素へのアクセス
A(2,3)              % 2行3列目の要素（値：6）

% 行・列の抽出
A(2,:)              % 2行目すべて
A(:,1)              % 1列目すべて
A(1:2, 2:3)         % 1-2行目、2-3列目の部分行列

% 論理インデックス
A(A > 5)            % 5より大きい要素を抽出</code></pre>
        `
      },
      {
        id: 'section5',
        title: '5. 基本的な演算',
        content: `
          <h3>5.1 算術演算</h3>
          <table>
            <thead>
              <tr>
                <th>演算子</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>+</code></td>
                <td>加算</td>
                <td><code>a + b</code></td>
              </tr>
              <tr>
                <td><code>-</code></td>
                <td>減算</td>
                <td><code>a - b</code></td>
              </tr>
              <tr>
                <td><code>*</code></td>
                <td>行列乗算</td>
                <td><code>A * B</code></td>
              </tr>
              <tr>
                <td><code>.*</code></td>
                <td>要素毎の乗算</td>
                <td><code>A .* B</code></td>
              </tr>
              <tr>
                <td><code>/</code></td>
                <td>右除算</td>
                <td><code>A / B</code></td>
              </tr>
              <tr>
                <td><code>./</code></td>
                <td>要素毎の除算</td>
                <td><code>A ./ B</code></td>
              </tr>
              <tr>
                <td><code>^</code></td>
                <td>行列のべき乗</td>
                <td><code>A ^ 2</code></td>
              </tr>
              <tr>
                <td><code>.^</code></td>
                <td>要素毎のべき乗</td>
                <td><code>A .^ 2</code></td>
              </tr>
            </tbody>
          </table>

          <div class="warning">
            <strong>注意：</strong> ドット（.）の有無によって演算の意味が変わります。ドット付きは要素毎の演算、ドットなしは行列としての演算を意味します。
          </div>

          <h3>5.2 関係演算・論理演算</h3>
          <table>
            <thead>
              <tr>
                <th>演算子</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>==</code></td>
                <td>等しい</td>
                <td><code>a == b</code></td>
              </tr>
              <tr>
                <td><code>~=</code></td>
                <td>等しくない</td>
                <td><code>a ~= b</code></td>
              </tr>
              <tr>
                <td><code>&lt;</code></td>
                <td>より小さい</td>
                <td><code>a &lt; b</code></td>
              </tr>
              <tr>
                <td><code>&gt;</code></td>
                <td>より大きい</td>
                <td><code>a &gt; b</code></td>
              </tr>
              <tr>
                <td><code>&amp;&amp;</code></td>
                <td>論理AND（スカラー）</td>
                <td><code>a &amp;&amp; b</code></td>
              </tr>
              <tr>
                <td><code>||</code></td>
                <td>論理OR（スカラー）</td>
                <td><code>a || b</code></td>
              </tr>
              <tr>
                <td><code>&amp;</code></td>
                <td>論理AND（配列）</td>
                <td><code>A &amp; B</code></td>
              </tr>
              <tr>
                <td><code>|</code></td>
                <td>論理OR（配列）</td>
                <td><code>A | B</code></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: 'section6',
        title: '6. 数学関数',
        content: `
          <h3>6.1 基本的な数学関数</h3>
          <table>
            <thead>
              <tr>
                <th>関数</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>sin, cos, tan</code></td>
                <td>三角関数</td>
                <td><code>sin(pi/4)</code></td>
              </tr>
              <tr>
                <td><code>asin, acos, atan</code></td>
                <td>逆三角関数</td>
                <td><code>asin(0.5)</code></td>
              </tr>
              <tr>
                <td><code>exp</code></td>
                <td>指数関数</td>
                <td><code>exp(1)</code></td>
              </tr>
              <tr>
                <td><code>log</code></td>
                <td>自然対数</td>
                <td><code>log(10)</code></td>
              </tr>
              <tr>
                <td><code>log10</code></td>
                <td>常用対数</td>
                <td><code>log10(100)</code></td>
              </tr>
              <tr>
                <td><code>sqrt</code></td>
                <td>平方根</td>
                <td><code>sqrt(16)</code></td>
              </tr>
              <tr>
                <td><code>abs</code></td>
                <td>絶対値</td>
                <td><code>abs(-5)</code></td>
              </tr>
              <tr>
                <td><code>round</code></td>
                <td>四捨五入</td>
                <td><code>round(3.7)</code></td>
              </tr>
            </tbody>
          </table>

          <h3>6.2 行列関数</h3>
          <table>
            <thead>
              <tr>
                <th>関数</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>size</code></td>
                <td>行列のサイズ</td>
                <td><code>size(A)</code></td>
              </tr>
              <tr>
                <td><code>length</code></td>
                <td>ベクトルの長さ</td>
                <td><code>length(v)</code></td>
              </tr>
              <tr>
                <td><code>det</code></td>
                <td>行列式</td>
                <td><code>det(A)</code></td>
              </tr>
              <tr>
                <td><code>inv</code></td>
                <td>逆行列</td>
                <td><code>inv(A)</code></td>
              </tr>
              <tr>
                <td><code>transpose</code></td>
                <td>転置行列</td>
                <td><code>A'</code> または <code>transpose(A)</code></td>
              </tr>
              <tr>
                <td><code>eig</code></td>
                <td>固有値・固有ベクトル</td>
                <td><code>eig(A)</code></td>
              </tr>
              <tr>
                <td><code>rank</code></td>
                <td>行列の階数</td>
                <td><code>rank(A)</code></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: 'section7',
        title: '7. 制御構造',
        content: `
          <h3>7.1 条件分岐（if文）</h3>
          <pre><code class="language-matlab">x = 5;
if x > 0
    disp('xは正の数です');
elseif x < 0
    disp('xは負の数です');
else
    disp('xは0です');
end</code></pre>

          <h3>7.2 switch文</h3>
          <pre><code class="language-matlab">grade = 'A';
switch grade
    case 'A'
        disp('優秀');
    case 'B'
        disp('良好');
    case 'C'
        disp('可');
    otherwise
        disp('不可');
end</code></pre>

          <h3>7.3 for文（繰り返し処理）</h3>
          <pre><code class="language-matlab">% 基本的なfor文
for i = 1:5
    disp(['i = ', num2str(i)]);
end

% 配列を使ったfor文
values = [2, 4, 6, 8, 10];
for val = values
    disp(['値: ', num2str(val)]);
end</code></pre>

          <h3>7.4 while文</h3>
          <pre><code class="language-matlab">i = 1;
while i <= 5
    disp(['i = ', num2str(i)]);
    i = i + 1;
end</code></pre>
        `
      },
      {
        id: 'section8',
        title: '8. 関数の作成',
        content: `
          <h3>8.1 関数ファイルの作成</h3>
          <p>MATLABでは、独自の関数を作成することができます。関数は.mファイルとして保存します。</p>

          <pre><code class="language-matlab">function result = my_function(x, y)
    % MY_FUNCTION - 二つの数値を加算する関数
    %   result = my_function(x, y) は x と y の和を返す

    result = x + y;
end</code></pre>

          <h3>8.2 複数の出力を持つ関数</h3>
          <pre><code class="language-matlab">function [sum_val, diff_val, prod_val] = calc_operations(a, b)
    % CALC_OPERATIONS - 複数の演算を行う関数

    sum_val = a + b;
    diff_val = a - b;
    prod_val = a * b;
end

% 使用例
[s, d, p] = calc_operations(10, 5);</code></pre>

          <h3>8.3 無名関数（匿名関数）</h3>
          <pre><code class="language-matlab">% 無名関数の定義
f = @(x) x.^2 + 2*x + 1;

% 使用例
result = f(3);  % 16を返す

% 複数の引数を持つ無名関数
g = @(x, y) x.^2 + y.^2;
result = g(3, 4);  % 25を返す</code></pre>
        `
      },
      {
        id: 'section9',
        title: '9. データの可視化',
        content: `
          <h3>9.1 基本的なプロット</h3>
          <pre><code class="language-matlab">% 基本的な2次元プロット
x = 0:0.1:2*pi;
y = sin(x);
plot(x, y);
title('正弦波');
xlabel('x');
ylabel('sin(x)');
grid on;</code></pre>

          <h3>9.2 複数のプロット</h3>
          <pre><code class="language-matlab">% 一つのグラフに複数のプロット
x = 0:0.1:2*pi;
y1 = sin(x);
y2 = cos(x);

figure;
plot(x, y1, 'r-', x, y2, 'b--');
legend('sin(x)', 'cos(x)');
title('三角関数');
xlabel('x');
ylabel('y');
grid on;</code></pre>

          <h3>9.3 subplot（複数グラフの表示）</h3>
          <pre><code class="language-matlab">x = 0:0.1:2*pi;

figure;
subplot(2, 2, 1);
plot(x, sin(x));
title('sin(x)');

subplot(2, 2, 2);
plot(x, cos(x));
title('cos(x)');

subplot(2, 2, 3);
plot(x, tan(x));
title('tan(x)');
ylim([-5, 5]);

subplot(2, 2, 4);
plot(x, exp(x));
title('exp(x)');</code></pre>

          <h3>9.4 3次元プロット</h3>
          <pre><code class="language-matlab">% 3次元プロット
t = 0:0.1:4*pi;
x = cos(t);
y = sin(t);
z = t;

figure;
plot3(x, y, z);
title('3次元螺旋');
xlabel('X');
ylabel('Y');
zlabel('Z');
grid on;</code></pre>
        `
      },
      {
        id: 'section10',
        title: '10. ファイル操作',
        content: `
          <h3>10.1 データの保存と読み込み</h3>
          <pre><code class="language-matlab">% データの保存
A = rand(5, 5);
save('mydata.mat', 'A');  % .matファイルとして保存

% データの読み込み
load('mydata.mat');  % 変数Aが復元される

% CSVファイルの読み書き
csvwrite('data.csv', A);  % CSV形式で保存
B = csvread('data.csv');  % CSV形式で読み込み</code></pre>

          <h3>10.2 テキストファイルの操作</h3>
          <pre><code class="language-matlab">% ファイルの書き込み
fid = fopen('output.txt', 'w');
fprintf(fid, 'Hello, MATLAB!\\n');
fprintf(fid, 'Number: %d\\n', 42);
fclose(fid);

% ファイルの読み込み
fid = fopen('output.txt', 'r');
content = fread(fid, '*char')';
fclose(fid);
disp(content);</code></pre>
        `
      },
      {
        id: 'section11',
        title: '11. デバッグとエラー処理',
        content: `
          <h3>11.1 デバッグの基本</h3>
          <p>MATLABでは、エディター内でブレークポイントを設定することで、プログラムの実行を一時停止し、変数の値を確認できます。</p>

          <ul>
            <li>行番号の左側をクリックしてブレークポイントを設定</li>
            <li>F5キーでプログラムを実行</li>
            <li>F10キーでステップ実行</li>
            <li>F11キーでステップイン</li>
            <li>変数の値はワークスペースで確認</li>
          </ul>

          <h3>11.2 エラー処理（try-catch文）</h3>
          <pre><code class="language-matlab">try
    % エラーが発生する可能性のある処理
    result = 10 / 0;
catch ME
    % エラーが発生した場合の処理
    disp('エラーが発生しました:');
    disp(ME.message);
end</code></pre>
        `
      },
      {
        id: 'section12',
        title: '12. 実践的なTips',
        content: `
          <h3>12.1 効率的なプログラミング</h3>
          <ul>
            <li><strong>ベクトル化</strong>：ループの代わりに配列演算を使用</li>
            <li><strong>メモリ事前確保</strong>：大きな配列は事前に初期化</li>
            <li><strong>適切なデータ型</strong>：メモリ効率を考慮した型選択</li>
            <li><strong>コメント</strong>：コードの可読性を向上</li>
          </ul>

          <pre><code class="language-matlab">% 悪い例（遅い）
result = [];
for i = 1:1000
    result = [result, i^2];
end

% 良い例（速い）
result = zeros(1, 1000);  % 事前確保
for i = 1:1000
    result(i) = i^2;
end

% さらに良い例（ベクトル化）
result = (1:1000).^2;</code></pre>

          <h3>12.2 便利なコマンド</h3>
          <table>
            <thead>
              <tr>
                <th>コマンド</th>
                <th>機能</th>
                <th>例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>tic, toc</code></td>
                <td>実行時間測定</td>
                <td><code>tic; [処理]; toc;</code></td>
              </tr>
              <tr>
                <td><code>disp</code></td>
                <td>値の表示</td>
                <td><code>disp('Hello')</code></td>
              </tr>
              <tr>
                <td><code>fprintf</code></td>
                <td>フォーマット出力</td>
                <td><code>fprintf('x = %.2f\\n', x)</code></td>
              </tr>
              <tr>
                <td><code>input</code></td>
                <td>ユーザー入力</td>
                <td><code>x = input('値を入力: ')</code></td>
              </tr>
              <tr>
                <td><code>pause</code></td>
                <td>実行の一時停止</td>
                <td><code>pause(2)</code></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: 'section13',
        title: '13. 学習リソース',
        content: `
          <h3>13.1 公式リソース</h3>
          <ul>
            <li><strong>MATLAB入門（無料オンラインコース）</strong>：MathWorks公式の対話型学習コース</li>
            <li><strong>MATLAB Online</strong>：ブラウザ上でMATLABを使用可能</li>
            <li><strong>MATLAB Mobile</strong>：スマートフォンからMATLABにアクセス</li>
            <li><strong>ドキュメンテーション</strong>：包括的なリファレンスとチュートリアル</li>
          </ul>

          <h3>13.2 効果的な学習方法</h3>
          <ol>
            <li><strong>基本概念の理解</strong>：行列演算の基本を理解する</li>
            <li><strong>実践練習</strong>：簡単な問題から始めて段階的に複雑化</li>
            <li><strong>プロジェクト指向</strong>：実際の問題解決に応用</li>
            <li><strong>コミュニティ活用</strong>：MATLAB Centralやフォーラムの活用</li>
            <li><strong>継続的学習</strong>：新機能や高度な技術の習得</li>
          </ol>
        `
      },
      {
        id: 'section14',
        title: '14. まとめ',
        content: `
          <p>本記事では、MATLAB初心者が知っておくべき基本的な知識を網羅的に解説しました。MATLABは非常に強力なツールですが、基本をしっかりと理解することで、効率的に活用できるようになります。</p>

          <p>重要なポイントをまとめると：</p>
          <ul>
            <li>MATLABではすべてのデータが行列として扱われる</li>
            <li>ベクトル化を意識することで効率的なプログラムが書ける</li>
            <li>豊富な組み込み関数を活用する</li>
            <li>デバッグ機能を使って問題を特定・解決する</li>
            <li>継続的な学習と実践が重要</li>
          </ul>

          <p>今後は、特定の分野（信号処理、画像処理、機械学習など）に特化した学習を進めることをお勧めします。MATLABの強力な機能を活用して、様々な問題解決に挑戦してください。</p>

          <div class="note">
            <strong>参考文献・リンク：</strong>
            <ul>
              <li>MathWorks公式サイト: <a href="https://jp.mathworks.com/" target="_blank">https://jp.mathworks.com/</a></li>
              <li>MATLAB入門チュートリアル: <a href="https://jp.mathworks.com/support/learn-with-matlab-tutorials.html" target="_blank">https://jp.mathworks.com/support/learn-with-matlab-tutorials.html</a></li>
              <li>MATLAB基本関数リファレンス: MathWorks公式資料</li>
            </ul>
          </div>
        `
      }
    ]

    const tocItems = sections

    onMounted(() => {
      nextTick(() => {
        highlightCode()
      })
    })

    return {
      sections,
      sectionsContent,
      tocItems,
      isTocActive
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
  background: linear-gradient(135deg, #fef5e7 0%, #fdebd0 100%);
  border-radius: 12px;

  h1 {
    font-size: 2.5rem;
    color: var(--matlab-color);
    margin-bottom: 20px;
  }

  .article-meta {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
}

.article-section {
  margin-bottom: 60px;

  h2 {
    color: var(--matlab-color);
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
    border-left: 3px solid var(--matlab-color);
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
    background: #f5f5f5;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    code {
      background: transparent !important;
      padding: 15px !important;
      display: block;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }

  code:not(pre code) {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    color: #d14;
  }

  ul, ol {
    padding-left: 30px;
    margin-bottom: 20px;

    li {
      margin-bottom: 10px;
      line-height: 1.8;

      strong {
        color: var(--matlab-color-dark, #d97f00);
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
      background-color: var(--matlab-color);
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
  background-color: #e8f4f8;
  border-left: 4px solid var(--matlab-color);
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;

  strong {
    color: var(--matlab-color);
  }

  ul {
    margin-top: 10px;
  }

  a {
    color: var(--matlab-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.warning {
  background-color: #fff3cd;
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
    }
  }
}
</style>
