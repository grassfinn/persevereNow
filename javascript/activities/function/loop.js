let count = 0;

function sayHelloForever() {
  if (count >= 10) {
    return;
  }
  console.log('sayHello', count);
  count++;
  sayHelloForever();
}
sayHelloForever();
