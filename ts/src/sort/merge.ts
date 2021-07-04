// マージソート

export type MergeSortType = "asc" | "desc";
type Param = {
  ary: number[];
  sortType?: MergeSortType;
};

type MergeSortParam = {
  left: number;
  right: number;
  sortType: MergeSortType;
} & Param;

export const mergeSort = ({ ary, sortType = "asc" }: Param) => {
  return _mergeSort({ ary, left: 0, right: ary.length, sortType });
};

const _mergeSort = ({ ary, left, right, sortType }: MergeSortParam) => {
  // 比較対象のサイズが1になったらこれ以上分割出来ないのでreturnする
  if (right - left === 1) {
    return;
  }

  // 中央の位置を求める。小数点が入る場合は切り上げ
  const mid = Math.floor(left + (right - left) / 2);

  // 左側のソート
  _mergeSort({ ary, left, right: mid, sortType });
  // 右側のソート
  _mergeSort({ ary, left: mid, right, sortType });

  let buf: number[] = [];
  // 今の値を待避、ついでに右側は判定してソートする
  for (let i = left; i < mid; i++) {
    buf.push(ary[i]);
  }
  for (let j = right - 1; mid <= j; j--) {
    buf.push(ary[j]);
  }

  // 比較しながら統合する(最初から比較する)
  let leftIndex = 0;
  let rightIndex = buf.length - 1; // 現在のbufが対象

  for (let i = left; i < right; i++) {
    if (comparisonDependOnOrder(buf[leftIndex], buf[rightIndex], sortType)) {
      ary[i] = buf[leftIndex++]; // 左側が小さい場合は左側のインデックスをあげる
    } else {
      ary[i] = buf[rightIndex--]; // 右側が小さい場合は右側のインデックスを下げる.L24で反転した状態で配列に入れているため
    }
  }
  return ary;
};

const comparisonDependOnOrder = (
  a: number,
  b: number,
  sortType: MergeSortType
) => (sortType === "asc" ? a < b : a > b);
