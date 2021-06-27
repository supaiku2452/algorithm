// マージソート

let ary = [10, 5, 3, 4, 16, 12, 1, 14];

const mergeSort = (left: number, right: number) => {
  // 比較対象のサイズが1になったらこれ以上分割出来ないのでreturnする
  if (right - left === 1) {
    return;
  }

  // 中央の位置を求める。小数点が入る場合は切り上げ
  const mid = Math.floor(left + (right - left) / 2);

  // 左側のソート
  mergeSort(left, mid);
  // 右側のソート
  mergeSort(mid, right);

  let buf: number[] = [];
  // 今の値を待避、ついでに右側は判定してソートする
  for (let i = left; i < mid; i++) {
    buf.push(array[i]);
  }
  for (let j = right - 1; mid <= j; j--) {
    buf.push(array[j]);
  }

  // 比較しながら統合する(最初から比較する)
  let leftIndex = 0;
  let rightIndex = buf.length - 1; // 現在のbufが対象

  for (let i = left; i < right; i++) {
    if (buf[leftIndex] <= buf[rightIndex]) {
      array[i] = buf[leftIndex++]; // 左側が小さい場合は左側のインデックスをあげる
    } else {
      array[i] = buf[rightIndex--]; // 右側が小さい場合は右側のインデックスを下げる.L24で反転した状態で配列に入れているため
    }
  }
};

mergeSort(0, ary.length);

console.log(ary.toString());
