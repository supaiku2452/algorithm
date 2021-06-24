// マージソート

let ary = [10, 5, 3, 4, 16, 12, 1, 14];

const mergeSort = (left: number, right: number) => {
  // これ以上分割出来ない
  if (right - left === 1) {
    return;
  }
  const mid = Math.floor(left + (right - left) / 2);

  // 左側のソート
  mergeSort(left, mid);
  // 右側のソート
  mergeSort(mid, right);

  // 左側と右側のソート結果をコピーする(右側だけ反転する)
  const buf: number[] = [];
  for (let i = left; i < mid; i++) {
    buf.push(ary[i]);
  }
  for (let j = right - 1; j >= mid; j--) {
    buf.push(ary[j]);
  }

  // 統合
  let index_left = 0;
  let index_right = buf.length - 1;

  for (let i = left; i < right; i++) {
    if (buf[index_left] <= buf[index_right]) {
      ary[i] = buf[index_left++];
    } else {
      ary[i] = buf[index_right--];
    }
  }
};

mergeSort(0, ary.length);

console.log(ary.toString());
