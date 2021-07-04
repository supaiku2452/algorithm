// 挿入ソート

export type InsertionSortType = "asc" | "desc";
type Param = {
  ary: number[];
  sortType?: InsertionSortType;
};

export const insertionSort = ({ ary, sortType = "asc" }: Param) => {
  let newArray = [...ary];
  for (let i = 1; i < newArray.length; i++) {
    const v = newArray[i]; // 今の値を待避(比較対象)

    let j = i; //iいかがソート対象
    for (; j > 0; j--) {
      //比較対象が一つ前の要素より小さい場合はjにj-1の値を設定
      if (comparisonDependOnOrder(v, newArray[j - 1], sortType)) {
        // 降順にしたい場合はここを反転
        newArray[j] = newArray[j - 1];
      } else {
        // ifを満たさない場合はそれ以降ソート不要(ソート済みなので)
        break;
      }
    }
    // 最後に一番小さいところ(jの最終結果)に比較対象を入れる
    newArray[j] = v;
  }
  return newArray;
};

const comparisonDependOnOrder = (
  a: number,
  b: number,
  sortType: InsertionSortType
) => (sortType === "asc" ? a < b : a > b);
