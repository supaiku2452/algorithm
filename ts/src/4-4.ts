// フィボナッチ数列をメモ化
// フィボナッチ数列の現在値の算出は、最大２回前の計算結果が分かれば良いので、
// その結果を配列として表す
// 計算量はO(N)となる

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input two number:", (answer) => {
  const n = Number(answer);
  const fiboAry = new Array(n);
  fiboAry[0] = 0;
  fiboAry[1] = 1;

  for (let i = 2; i < n; ++i) {
    fiboAry[i] = fiboAry[i - 1] + fiboAry[i - 2];
  }
  fiboAry.map((v) => console.log(v));
  rl.close();
});
