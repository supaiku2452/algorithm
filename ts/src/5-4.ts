// ナップサック問題

const weight = [2, 1, 3, 2, 1, 5];
const value = [3, 2, 6, 1, 3, 85];

const N = 6;
const W = 10;
const nn = N + 1;
const ww = W + 1;
let ddp: number[][] = Array(nn);

for (let dpi = 0; dpi < nn; dpi++) {
  ddp[dpi] = Array(ww);
  for (let dpw = 0; dpw < ww; dpw++) {
    ddp[dpi][dpw] = 0;
  }
}

const chmax = (i: number, w: number, b: number) => {
  if (ddp[i][w] < b) {
    ddp[i][w] = b;
  }
};

for (let i = 0; i < N; i++) {
  for (let w = 0; w <= W; w++) {
    if (w - weight[i] >= 0) {
      chmax(i + 1, w, ddp[i][w - weight[i]] + value[i]);
    }
    chmax(i + 1, w, ddp[i][w]);
  }
}

console.log(ddp[6][10]);
