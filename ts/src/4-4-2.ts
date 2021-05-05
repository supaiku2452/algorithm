// フィボナッチ数列の計算
// キャッシュ機構を用いて、計算済みの場合はキャッシュを参照する

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fibo = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (fiboAry[n] !== -1) {
    return fiboAry[n];
  }

  return (fiboAry[n] = fibo(n - 2) + fibo(n - 1));
};

var fiboAry: number[];

rl.question("input number:", (answer) => {
  const n = Number(answer);
  fiboAry = new Array(n + 1).fill(-1);
  fiboAry[0] = 0;
  fiboAry[1] = 1;
  const result = fibo(n);

  console.log({ result });
  rl.close();
});
