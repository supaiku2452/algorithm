# 9章

- スタック
  - Last-in First-out
- キュー
  - First-in First-out
  - リングバッファ
    - キューでpop(dequeue)/push(enqueue)を繰り返すと配列サイズがどんどん大きくなるので、決められたサイズの中でhead/tailを決める方法
    - head/tailは $0 〜 N-1$ まで
