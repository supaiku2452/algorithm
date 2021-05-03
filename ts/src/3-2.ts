import * as readline from "readline";

const ary = [4, 3, 12, 7, 11];

let result = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input number:", (answer) => {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === Number(answer)) {
      result = true;
    }
  }

  console.log({ result });
  rl.close();
});
