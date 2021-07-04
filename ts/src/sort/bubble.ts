// バブルソート 昇順

export type BubbleSortType = "asc" | "desc";
type Param = {
  ary: number[];
  sortType?: BubbleSortType;
};

export const bubbleSort = ({ ary, sortType = "asc" }: Param) => {
  for (let i = 0; i < ary.length; i++) {
    for (let j = i + 1; j < ary.length; j++) {
      if (comparisonDependOnOrder(ary[i], ary[j], sortType)) {
        let temp = ary[i];
        ary[i] = ary[j];
        ary[j] = temp;
      }
    }
  }
  return ary;
};

const comparisonDependOnOrder = (
  a: number,
  b: number,
  sortType: BubbleSortType
) => (sortType === "asc" ? a > b : b > a);
