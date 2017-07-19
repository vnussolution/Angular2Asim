import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {





}

//////////////// Learn ES6///////////////////
///// let : block scope , use let to replace IIFE
function hello() {
  var a = 'test';
  for (var i = 0; i < 5; i++) {
    let a = 'hello';
  }
  console.log('app.component.ts::: Learn ES6 -no more printing out hello ', a);
}
hello();

///// let: using let in for loops. Without let , this code was a nightmare for js developers
var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});

/////// const: it is like let : block scoping, immutable variable, but mutable value
const foo = {};
foo['prop'] = "Moo"; // This works!
console.log(foo);

const foo1 = Object.freeze({});
//foo1['prop'] = 'test';
//foo1.prop = 123;
//console.log(foo1.prop) // undefined

///////template strings: `back ticks`
let name = 'love';
let string = `my name is ${name}`;

/////////Arrow function
let add = (a, b) => a + b;  //  let add = function(a,b){ return a + b ; }

// this
let obj = {
  name: "asim",
  sayLater: function () {
    console.log(this); // `this` points to obj
    setTimeout(() => {
      console.log(this); // `this` points to obj
      console.log(`${this.name}`); // `this` points to obj
    }, 1000);
  }
};
obj.sayLater();


////// Object Destructuring
const obj1 = { first: 'Asim', last: 'Hussain', age: 39 };
// {prop} is short for {prop: prop}
const { first, last } = obj1;
console.log(first); // Asim
console.log(last); // Hussain

// Array Destructuring
const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x); // a
console.log(y); // b
// Function Parameter Destructuring
function func({ x = 1 }) {
  console.log(x);
}
func({});

///// For & ForEach  to loop through Arrays
let array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < array.length; i++) {
  console.log('for loop:::', array[i]);

}
/////// for in   to loop through object properties
var obj2 = { a: 1, b: 2 };
for (let prop in obj2) {
  console.log(prop);
}

let array2 = [10, 20, 30];
for (let index in array2) {
  console.log(index); // index not value
};

////// for of  to loop through values
let array3 = [10, 20, 30];
for (var value of array3) {
  console.log(value);
}

///// Map

let map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);

let map2 = new Map().set("A", 1).set("B", 2).set("C", 3);

let map3 = new Map([["A", 1], ["B", 2], ["C", 3]]);

map.get('A');
map.has('A');
map.delete('A');
map.size;
map.clear();



/////Set
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');
let set2 = new Set()
  .add('APPLE')
  .add('ORANGE')
  .add('MANGO');
let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);
console.log(set.has('APPLE'));
set.delete('APPLE');
console.log(set.size);
set.clear();
console.log(set.size);
let set4 = new Set();
set3.add('Moo');
console.log(set3.size);
// 1
set4.add('Moo');
console.log(set4.size);


////////////////////////////////////////Promises/////////////////////
// Via callbacks
/*
function doAsyncTask(cb) {
setTimeout(() => {
console.log("Async Task Calling Callback");
cb();
}, 1000);
}
doAsyncTask(() => console.log("Callback Called"));
*/
// Via Promise
let error = false;
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
}
doAsyncTask().then(
  (val) => console.log(val),
  (err) => console.error(err)
);
// Immediately Resolved Promise
let promise = Promise.resolve('done');
promise.then((val) => console.log(val)); // 'done'
// Handling Errors
Promise.resolve('done')
  .then((val) => { throw new Error("fail") })
  .then((val) => console.log(val))
  .catch((err) => console.error(err));