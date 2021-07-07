export type QuickSortType = "asc" | "desc";
type Param = {
  ary: number[];
  sortType?: QuickSortType;
};

type QuickSortParam = {
  left: number;
  right: number;
  sortType: QuickSortType;
} & Param;

export const quickSort = ({
  ary,
  left,
  right,
  sortType = "asc",
}: QuickSortParam) => {
  _sort(ary, left, right);
};

const _sort = (ary: number[], left: number, right: number) => {
  if (right - left === 1) {
    return;
  }

  // 適当にpivotを決める
  const pivotIndex = Math.floor((right + left) / 2);
  const pivotValue = ary[pivotIndex];

  // pivotと一番右をswapする
  // const temp = ary[right - 1];
  // ary[right - 1] = pivotValue;
  // ary[pivotIndex] = temp;
  swap(ary, pivotIndex, right - 1);

  let i = left;
  let j = left;
  // jを右端まで進めるので
  for (; j < right - 1; j++) {
    // pivot < ary[j]なら右に進める
    // pivot > ary[j]なら ary[i] と ary[j]をswap
    if (pivotValue > ary[j]) {
      swap(ary, i++, j);
    }
  }
  swap(ary, i, right - 1);

  _sort(ary, left, pivotIndex);
  _sort(ary, pivotIndex, right);
};

const swap = (ary: number[], left: number, right: number) => {
  const leftValue = ary[left];
  ary[left] = ary[right];
  ary[right] = leftValue;
  // return ary;
};
