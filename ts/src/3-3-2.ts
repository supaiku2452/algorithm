// 最小値を取る
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input numbers:", (answer) => {
  let ary = answer.split(" ").map((str) => Number(str));
  let i = 0;
  let minValue = Number.MAX_SAFE_INTEGER;
  for (; i < ary.length; i++) {
    if (ary[i] < minValue) {
      minValue = ary[i];
    }
  }

  console.log({ minValue });

  rl.close();
});
