// set 做基础 + map 处理对象 + 注意NaN
/*
    基本类型：
    数字、字符串去重
    NaN
    保持原数组顺序
*/
// set
const arr = [1, 2, 2, 3, 3, 4, 5];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]
const arr_nan = [1, NaN, NaN, 2, 2, 3, 4];
const unique_nan = [...new Set(arr_nan)];
console.log(unique_nan); // [1, NaN, 2, 3, 4]

// 双循环，时间复杂度 O(n^2)

// 对象键值去重
function uniqueByObject(arr) {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
// 时间复杂度O(n)，但有类型转换问题
