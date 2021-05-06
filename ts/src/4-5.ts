// 部分和集合を再帰処理でとく。問題は、3-5で示したものと同じ。
// N=4, a={3,2,6,5} W=14

const n = 4;
const a = [3, 2, 6, 5];
const w = 14;

const f = (i: number, w: number) => {
  if (i === 0) {
    if (w === 0) {
      return true;
    }
    return false;
  }

  if (f(i - 1, w)) {
    return true;
  }

  if (f(i - 1, w - a[i - 1])) {
    return true;
  }

  return false;
};

const result = f(n, w);

console.log({ result });
