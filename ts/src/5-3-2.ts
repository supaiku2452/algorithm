// Frog問題
// 再帰処理で表現する

const n = 7;
const h = [2, 9, 4, 5, 1, 6, 10];

const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);

type RES = {
  res: number;
};

// indexではなくて、配列要素のポインターが欲しいがtsなのでこの実装にしている
const chmin = (a: RES, b: number) => {
  if (a.res > b) {
    a.res = b;
  }
};

const rec = (i: number): number => {
  if (i === 0) return 0;

  let res = { res: Number.MAX_SAFE_INTEGER };

  chmin(res, rec(i - 1) + Math.abs(h[i] - h[i - 1]));

  if (i > 1) {
    chmin(res, rec(i - 2) + Math.abs(h[i] - h[i - 2]));
  }
  dp[i] = res.res;
  return dp[i];
};

rec(n);

console.log(dp[n - 1]);
