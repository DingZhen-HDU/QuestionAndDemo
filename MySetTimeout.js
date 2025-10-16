const myTimers = new Map();
let timerIdCounter = 0;

function mySetTimeout(fn, delay, ...args) {
  const id = ++timerIdCounter;
  const startTime = performance.now();

  const tick = () => {
    if (myTimers.has(id)) {
      const now = performance.now();
      if (now - startTime >= delay) {
        fn(...args);
        myTimers.delete(id);
      } else {
        queueMicrotask(tick);
      }
    }
  };

  myTimers.set(id);
  queueMicrotask(tick);

  return id;
}

function myClearTimeout(id) {
  if (myTimers.has(id)) {
    myTimers.delete(id);
  }
}

function add(a, b) {
  console.log(a + b);

  return a + b;
}

mySetTimeout(() => add(1, 2), 1000);
myClearTimeout(1);
