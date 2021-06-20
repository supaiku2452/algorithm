// バブルソート 昇順
let ary = [5, 10, 4, 3, 16, 12];

for (let i = 0; i < ary.length; i++) {
  for (let j = i + 1; j < ary.length; j++) {
    if (ary[i] > ary[j]) {
      let temp = ary[i];
      ary[i] = ary[j];
      ary[j] = temp;
    }
  }
}

console.log(ary.toString());
