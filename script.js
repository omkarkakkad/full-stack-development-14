function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  console.log("getting data2....");
  getData(2, () => {
    console.log("getting data3....");
    getData(3, () => {
      console.log("getting data4.....");
      getData(4);
    });
  });
});

let promise = new Promise((resolve, reject) => {
  console.log("i am promise");
  resolve("success");
});

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("promise");
    resolve("success");
  });
};

// let promise = getPromise();
// promise.then(() => {
//   console.log("promise fulfilled");
// });

function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1....");
asyncFunc1().then((res) => {
  console.log("fetching data2");
  asyncFun2().then((res) => {});
});
