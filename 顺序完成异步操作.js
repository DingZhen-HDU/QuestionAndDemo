// 依次远程读取一组 URL，然后按照读取的顺序输出结果。
// promise 写法
function logInOrder(urls) {
  // 远程读取所有URL
  const textPromises = urls.map((url) => {
    return fetch(url).then((response) => response.text());
  });

  // 按次序输出
  textPromises.reduce((chain, textPromise) => {
    // chain 是 reduce 的累加器（accumulator），它是一个 Promise，代表“到目前为止的异步执行链”。
    return chain.then(() => textPromise).then((text) => console.log(text));
  }, Promise.resolve());
}

// async 函数实现
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}

// 上述所有远程操作都是继发。只有前一个 URL 返回结果，才会去读取下一个 URL，这样做效率很差，非常浪费时间。我们需要的是并发发出远程请求
async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async (url) => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
