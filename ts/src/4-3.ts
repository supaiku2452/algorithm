// フィボナッチ数列の計算

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fibo = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 2) + fibo(n - 1);
};

rl.question("input number:", (answer) => {
  const result = fibo(Number(answer));
  console.log({ result });
  rl.close();
});
