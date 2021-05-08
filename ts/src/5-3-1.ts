// Frog問題
// 緩和を表現する関数を使用する

const n = 7;
const h = [2, 9, 4, 5, 1, 6, 10];

const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);

// indexではなくて、配列要素のポインターが欲しいがtsなのでこの実装にしている
const chmin = <T>(index: number, b: T) => {
  if (dp[index] > b) {
    dp[index] = b;
  }
};

// 初期値
dp[0] = 0;

for (let i = 1; i < n; i++) {
  chmin(i, dp[i - 1] + Math.abs(h[i - 1] - h[i]));
  if (i > 1) {
    chmin(i, dp[i - 2] + Math.abs(h[i - 2] - h[i]));
  }
}

console.log(dp[n - 1]);
