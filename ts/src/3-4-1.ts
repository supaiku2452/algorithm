// N個の整数aとN個の整数b、そうぞれ1つの値を取り出した和は、Kより大きいかつその最小値を求める
// a = [8,5,4] b = [4,1,9] K = 10とすると、a=8,b=4 合計=12が解となる
// O(N^2)のパターン

const a = [8, 5, 4];
const b = [4, 1, 9];
const k = 10;

let ans = Number.MAX_SAFE_INTEGER;
let aIndex = -1;
let bIndex = -1;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] + b[j] >= k && ans > a[i] + b[j]) {
      ans = a[i] + b[j];
      aIndex = i;
      bIndex = j;
    }
  }
}

console.log({ ans });
console.log(`a number ${a[aIndex]}, aIndex ${aIndex}`);
console.log(`b number ${b[bIndex]}, bIndex ${bIndex}`);
