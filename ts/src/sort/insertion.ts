// 挿入ソート(昇順)

let ary = [10, 5, 3, 4, 16, 12];

for (let i = 1; i < ary.length; i++) {
  let value = ary[i];

  let j = i;
  for (; j > 0; j--) {
    if (value < ary[j - 1]) {
      ary[j] = ary[j - 1];
    } else {
      break;
    }
  }
  ary[j] = value;
}
console.log(ary.toString());
