<<<<<<< HEAD
const hello = () => {
  console.log("Hello world!");
};

hello();
=======
import * as fun from "./fun.js";
import * as counter from "./counter.js";
import * as queue from "./arrays.js";

fun.hello();
const msg = fun.greeting();
console.log(msg);
const msg2 = fun.greeting("Zacamo");
console.log(msg2);

console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}
>>>>>>> cc3bf327a2c7954c14bbc6afc1e3ddc4fa79af3c
