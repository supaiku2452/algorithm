import { bubbleSort, BubbleSortType } from "./bubble";

type TestParamType = {
  input: number[];
  sortType: BubbleSortType;
  expected: number[];
};

describe("bubble sort test", () => {
  test.each([
    { input: [1, 3, 4, 5, 2], sortType: "asc", expected: [1, 2, 3, 4, 5] },
    { input: [1, 3, 4, 5, 2], sortType: "desc", expected: [5, 4, 3, 2, 1] },
  ] as TestParamType[])(
    "bubble sort by $sortType . $input ===> $expected",
    ({ input, sortType, expected }) => {
      expect(bubbleSort({ ary: input, sortType })).toEqual(expected);
    }
  );
});
