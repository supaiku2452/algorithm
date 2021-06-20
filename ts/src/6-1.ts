// 二分探索法
// [3, 5, 8, 10, 14, 17, 21, 39]から該当する数値があるか探索する

const numbers = [3, 5, 8, 10, 14, 17, 21, 39];
const binarySearch = (key: number) => {
  let left = 0;
  let right = numbers.length - 1;

  while (right >= left) {
    // 小数点切り捨て
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] > key) {
      right = mid - 1;
    }
    if (numbers[mid] < key) {
      left = mid + 1;
    }
    if (numbers[mid] === key) {
      return mid;
    }
  }
  return -1;
};

[1, 8, 9, 100, 17, 21].forEach((i) => {
  console.log(`search key: ${i}, result: ${binarySearch(i)}`);
});
