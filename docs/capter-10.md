# 10章

- グラフ(用語)
  - 頂点(vertex)
  - 辺(edge)
  - グラフを $G$
  - 頂点の集合を $V = \{v_1, v_2,...,v_N\}$
  - 辺の集合を $E = \{e_1, e_2,...,e_N\}$
  - グラフは頂点と辺の組で表すので、 $G=(V,E)$
    - 各辺は $e ∈ E$を2つの頂点 $v_i,v_j ∈ V$ の組として定義し、 $e = (v_i, v_j)$ と表す
    - 頂点 $v_i, v_j$ が 辺 $e$ で結ばれているとき、 $v_i, v_j$ は互いに隣接しているという
    - また、各辺 $e$ に実数値または整数値をとる重みがある場合がある。これを**重み付きグラフ**と呼ぶ
  - $v_i, v_j$ を複数の辺が結ぶことを**多重辺**と呼ぶ
  - $e = (v, v)$ を**自己ループ**と呼ぶ
  - ↑の2つがないシンプルなグラフを**単純グラフ**と呼ぶ
  - グラフの辺に向きがないものを**無向グラフ**、向きがあるものを**有向グラフ**と呼ぶ
    - 有向グラフは一方通行の道をモデル化するときに役立つ
    - $e = (v_i, v_j)$ と $e = (v_j, v_i)$ を同一とする場合は無向グラフ
    - 区別する場合は、有向グラフ
- 部分グラフ
  - 自身がグラフであり、また自身は親の一部であることを**部分グラフ**と呼ぶ
- $G$上の2頂点 $s,t ∈ V$がs->tへ到達可能な場合、その経路を**ウォーク(walk)**または**s-t路**と呼ぶ
- 始点と終点が同じものを**サイクル**または**閉路**と呼ぶ
- ウォークのうち、同じ頂点を２度通らないものを**パス**または**道**と呼ぶ
  - 上記が有向グラフの場合は、有効サイクル、有効パス、有効ウォークと呼ぶ
  - 上記、それぞれの長さは、辺の重みの総和を指す
- タスクの依存関係を有向グラフで表すことが出来る
  - $G = (V,E)$の各辺$e = (u, v)$は、タスク $u$を終了して、$v$を開始することが出来ると条件を表す
  - 隣接リストは、各頂点$v$に対する隣接頂点の全体を連結リスト構造で管理するもの
  - $G[v]$が$v$の隣接頂点を表す

- データ構造
  - 隣接リスト表現
  - 隣接行列表現

- 隣接リスト表現
  - グラフの頂点の集合 $V = \{0,1,...,N-1\}$
  - 各頂点$v∈V$に対して、辺$(v,v')∈E$が存在する$v'$をリストアップする

- 木
  - 本書では無向グラフを指す
  - $G=(V,E)$が、連結でサイクルを持たないことを意味する
  - 特定の一つの頂点を特別に**根(root)**と呼ぶことがある
    - 根がある木を**根付き木(rooted tree)**と呼ぶ
  - 根を除いて、頂点がつながる辺が一つしかないものを**葉**と呼ぶ
  - 頂点以外の$v$で、$v$に隣接している頂点のうち、根側にある頂点を$p$を$v$の**親**、このとき$v$は$p$の**子**と表す
  - 同一の親を持つ子頂点同士を**兄弟(sibling)**と呼ぶ

- 部分木
  - 根付き木において、頂点$v$から子に着目すると、その部分も木をなしているので部分木と呼ぶことが出来る
  - $v$以外を$v$の子孫と呼ぶ
  - 根付き木上の$u,v$を指定すると、ただ一つのルートが決まる
  - 根付き木の各頂点$v$と根を結ぶ長さを**深さ(depth)**と呼ぶ
  - 深さの最大を**高さ**と表現する

- 順序木
  - $v$の子頂点の順序を意識するものを**順序木**と呼ぶ
  - 全ての頂点に対して$k$個の子頂点を持つものを、$k$分木と呼ぶ

- 二分木
  - $k$分木で$k=2$のとき、**二分木**と呼ぶ
  - 二分木の左側を左部分木、右側を右部分木と呼ぶ
  - 根付き木を持つデータ構造の各クエリの計算量は$O(h)$となる
    - 木の頂点数を$N$とすると、高さの最大は$N-1=O(N)$となる
  - 強平衡二分木
    - 全ての葉の深さが１しか違わないもの
    - 頂点数$N$として高さが$O(logN)であることが導ける
- ヒープ
  - 各頂点$v$がキーと呼ばれる値を持つ$key[v]$
    - 頂点$v$の親を$p$としたとき、$key[p] ≧ key[v]$が成り立つ
    - 高さ$h$としたとき、木の深さ$h-1$以下の部分が完全二分木
    - 頂点が左詰めされている
  - クエリ処理
    - 値$x$の挿入: $O(logN)$
    - 最大値の取得: $O(1)$
    - 最大値の削除: $O(logN)$
    - ヒープから特定の値$x$を検索する場合は、$O(N)$になる(適さない)
  - ヒープは配列で表現出来る
  - ヒープの深さ$d$と各頂点の配列は、$2^d-1,...,2^{d+1}-2$
  - 配列の添え字$k$の左右のこの頂点は、$2k_1, 2k+2$で表現出来る
  - 配列の添え字$k$の親の頂点は、$\frac{k-1}{2}$で表現出来る
  - ヒープに値を挿入した場合の再構築は、木の高さに依存するので最大で$O(logN)$
  - 根を削除した場合の計算量も最大で$O(logN)$となる

- 二分探索木(binary search tree)
  - 操作
    - 要素$x$をデータ構造に挿入する
    - 要素$x$をデータ構造から削除する
    - 要素$x$がデータ構造に含まれるか判定する
  - 条件
    - 任意の頂点$v$に対して以下を満たす
    - 左部分木: 全ての頂点$v'$が、$key[v]≧key[v']$が成立する
    - 右部分木: 全ての頂点$v'$が、$key[v]≦key[v']$が成立する
  - 平衡二分探索木
    - 各クエリ、最大値の取得が$O(logN)$で出来る
