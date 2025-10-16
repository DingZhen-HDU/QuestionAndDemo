const obj = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]: function () {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

// obj 是可迭代对象 obj[Symbol.iterator]() 是迭代器
const iterator = obj[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }

for (let item of obj) {
  console.log(item);
}
// 1 2 3 4 5
// for...of 自动解构了迭代器返回的 {value, done} 对象，只把 value 赋值给循环变量 item
/*
for...of 的作用是：
    调用 obj[Symbol.iterator]() 获取迭代器
    反复调用 .next() 方法 => 返回 {value, done} 对象
    隐式自动提取 .value 字段
    把 .value 赋值给循环变量（item）
    直到 done: true 停止
*/
