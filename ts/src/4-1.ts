// １から特定数字までの総和を求める

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const f = (n: number): number => {
  if (n === 0) return 0;
  return n + f(n - 1);
};

rl.question("input number:", (answer) => {
  const result = f(Number(answer));
  console.log({ result });
  rl.close();
});
