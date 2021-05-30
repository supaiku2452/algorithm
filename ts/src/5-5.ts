// 編集距離問題 S,Tの編集距離を求める
// S = logistic T = algorithm

const S = "logistic";
const T = "algorithm";

const dddp = new Array(S.length + 1);

for (let i = 0; i <= S.length; i++) {
  dddp[i] = new Array(T.length + 1);
  for (let j = 0; j <= T.length; j++) {
    dddp[i][j] = Number.MAX_SAFE_INTEGER;
  }
}

dddp[0][0] = 0;

const chhmin = (i: number, j: number, b: number) => {
  if (dddp[i][j] > b) {
    dddp[i][j] = b;
  }
};

for (let i = 0; i <= S.length; i++) {
  for (let j = 0; j <= T.length; j++) {
    if (i > 0 && j > 0) {
      if (S[i - 1] === T[j - 1]) {
        chhmin(i, j, dddp[i - 1][j - 1]);
      } else {
        chhmin(i, j, dddp[i - 1][j - 1] + 1);
      }
    }

    if (i > 0) {
      chhmin(i, j, dddp[i - 1][j] + 1);
    }
    if (j > 0) {
      chhmin(i, j, dddp[i][j - 1] + 1);
    }
  }
}
console.table(dddp);
console.log(dddp[S.length][T.length]);
