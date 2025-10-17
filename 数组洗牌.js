// Fisher Yates 算法
// 1. 从后往前遍历
// 2. 随机选择[0, i]的索引
// 3. 交换当前和随机索引的元素
// 4. 继续向前完成遍历
function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(arr);
console.log(arr);

// 随机采样
function sample(arr, k) {
  const res = [...arr];
  // [i, n-1]
  for (let i = 0; i < k; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res.slice(0, k);
}
console.log(sample(arr, 2));
