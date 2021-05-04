// O(N)が最大=5、最小=1となる

import * as readline from "readline";

const ary = [4, 3, 12, 7, 11];

let result = false;
let foundedIndex = -1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input number:", (answer) => {
  let count = 1;
  let i = 0;
  for (; i < ary.length; i++) {
    if (ary[i] === Number(answer)) {
      result = true;
      foundedIndex = i;
      break;
    }
    count++;
  }

  console.log({ result });
  if (foundedIndex === -1) {
    console.log(`not found ${answer}`);
  } else {
    console.log(`founded number ${answer}. index is ${foundedIndex}`);
  }
  console.log({ count });

  rl.close();
});
