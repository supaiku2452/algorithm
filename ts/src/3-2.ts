// 線形探索法どんな入力値を入れてもO(N)となる

import * as readline from "readline";

const ary = [4, 3, 12, 7, 11];

let result = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input number:", (answer) => {
  let count = 0;
  for (; count < ary.length; count++) {
    if (ary[count] === Number(answer)) {
      result = true;
    }
  }

  console.log({ result });
  console.log({ count });

  rl.close();
});
