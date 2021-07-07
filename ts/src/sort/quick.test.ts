import { quickSort } from "./quick";

describe("quick sort", () => {
  test("test", () => {
    const ary = [10, 12, 15, 3, 8, 17, 4, 1];
    const expected = [1, 3, 4, 8, 10, 12, 15, 17];
    quickSort({
      ary,
      left: 0,
      right: ary.length,
      sortType: "asc",
    });

    expect(ary).toEqual(expected);
  });
});
