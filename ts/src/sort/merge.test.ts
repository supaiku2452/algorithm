import { BubbleSortType } from "./bubble";
import { mergeSort } from "./merge";

type TestParamType = {
  input: number[];
  sortType: BubbleSortType;
  expected: number[];
};

describe("merge sort test", () => {
  test.each([
    { input: [1, 3, 4, 5, 2], sortType: "asc", expected: [1, 2, 3, 4, 5] },
    { input: [1, 3, 4, 5, 2], sortType: "desc", expected: [5, 4, 3, 2, 1] },
  ] as TestParamType[])(
    "merge sort. $input ===> $expected",
    ({ input, sortType, expected }) => {
      expect(mergeSort({ ary: input, sortType })).toEqual(expected);
    }
  );
});
