// 挿入ソート(昇順)

let array = [10, 5, 3, 4, 16, 12];

for (let i = 1; i < array.length; i++) {
  const v = array[i]; // 今の値を待避(比較対象)

  let j = i; //iいかがソート対象
  for (; j > 0; j--) {
    //比較対象が一つ前の要素より小さい場合はjにj-1の値を設定
    if (v < array[j - 1]) {
      // 降順にしたい場合はここを反転
      array[j] = array[j - 1];
    } else {
      // ifを満たさない場合はそれ以降ソート不要(ソート済みなので)
      break;
    }
  }
  // 最後に一番小さいところ(jの最終結果)に比較対象を入れる
  array[j] = v;
}

console.log(array);
