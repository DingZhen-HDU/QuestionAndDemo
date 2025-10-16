function* generator() {
  yield "state1"; // 此时 yield 是一个产出操作
  yield "state2";
  yield "state3";
}
// 调用generator函数会返回一个迭代器
const iterator = generator();

console.log(iterator.next().value); // state1
console.log(iterator.next().value); // state2
console.log(iterator.next().value); // state3
/* 
遍历器对象的next方法的运行逻辑如下。

（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
*/
// 暂缓执行函数
function* f() {
  console.log("hello world");
}

var g = f();

setTimeout(() => {
  g.next();
}, 1000);
// 如果 f 为普通函数，在为 g 赋值时就会第一次执行

// 惰性求值 Lazy Evaluation
function add(a, b) {
  return a + b;
}
function* computeCostTime() {
  console.log("computed: 1 + 2");
  yield add(1, 2);
  console.log("computed: 3 + 4");
  yield add(3, 4);
}
var g2 = computeCostTime();
console.log(g2.next().value);
console.log(g2.next().value);

// next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
// 通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
// 也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
function* dataConsumer() {
  console.log("Started");
  console.log(`1. ${yield}`); // 此时 yield 是一个接收操作
  console.log(`2. ${yield}`);
  return "result";
}

let genObj = dataConsumer();
genObj.next(); // Started
genObj.next("a"); // 1. a
genObj.next("b"); // 2. b
