// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

setTimeout(() => {
  console.log("hello there!");
});

function hello() {
  console.log("hello");
}

setTimeout(hello, 2000);

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

let age = 19;

if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str = str + j;
  }
  console.log(i, str);
}
