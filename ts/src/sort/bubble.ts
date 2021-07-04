// バブルソート

export type BubbleSortType = "asc" | "desc";
type Param = {
  ary: number[];
  sortType?: BubbleSortType;
};

export const bubbleSort = ({ ary, sortType = "asc" }: Param) => {
  let newArray = [...ary];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (comparisonDependOnOrder(newArray[i], newArray[j], sortType)) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }
  return newArray;
};

const comparisonDependOnOrder = (
  a: number,
  b: number,
  sortType: BubbleSortType
) => (sortType === "asc" ? a > b : b > a);
