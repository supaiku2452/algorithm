// N個の整数から、任意の数を取り出し、総和がWと一致するか検査する
// ここでは全探索なので部分集合の場合は、2^Nとなる
// 例えば、N=4 a={4,6,1,8} W=15 としたときは、6,1,8が該当する。W=16の場合は該当なしとなる

const n = 4;
const ary = [4, 6, 1, 8];
const w = 15;

let result = false;

for (let bit = 0; bit < 1 << n; bit++) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (bit & (1 << i)) {
      sum += ary[i];
    }
  }

  if (sum === w) {
    result = true;
    console.log(`2進数表記 ${bit.toString(2)}`);
    break;
  }
}

console.log({ result });
