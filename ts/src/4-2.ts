// 整数m,nの最大公約数を出す
// ユークリッドの互除法を使用する。GCD(m,n)=GCD(n,r)

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const f = (m: number, n: number): number => {
  if (m % n === 0) return n;

  return f(n, m % n);
};

rl.question("input two number:", (answer) => {
  const numbers = answer.split(" ").map((n) => Number(n));
  const result = f(numbers[0], numbers[1]);
  console.log({ result });
  rl.close();
});
