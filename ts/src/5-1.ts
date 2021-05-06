// Frog問題

const n = 7;
const h = [2, 9, 4, 5, 1, 6, 10];

const dp = new Array(n);

// 初期値
dp[0] = 0;

for (let i = 1; i < n; i++) {
  if (i === 1) {
    dp[i] = Math.abs(h[i - 1] - h[i]);
  } else {
    dp[i] = Math.min(
      dp[i - 1] + Math.abs(h[i - 1] - h[i]),
      dp[i - 2] + Math.abs(h[i - 2] - h[i])
    );
  }
}

console.log(dp[n - 1]);
