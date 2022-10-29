/*
function hello(){
console.log('Hello');

}
let btn = document.querySelector('#btn'); //knopka

console.log(btn);
hello();



const obj = {};
var x = false;

const earr = [];
const arr = ['string', 2, obj, earr, x]; // create array here

//exports.default = arr;
console.log(arr);
console.log(typeof(arr[4]));

const name = "Jack";
console.log(`Give this cup for ${name}`);
/*
//const obj = {a: 'text'};
//var x = false;

//const earr = ['a', 'b', 'c'];
const arr = ['string', 2, obj={a: 'text'}, earr= ['a', 'b', 'c'], x=true]; // create array here

//exports.default = arr;
console.log(arr);
console.log(typeof(arr[4]));

function foo(x){
   return function (y){
    return y;
  }
return sum=add(y)+x;
}
console.log(foo(3,5));
console.log(foo(4,2));
console.log(foo(9,-2));


function foo(x){
    return function(y){
        return x+y;
    }
}

const Person = function() {
   var name= "Ivan";
   setName: function (name){
     return this.name=name;
    };
   getName: function() {
        return name;
    }
};
const p = Person();
p.setName("Vasja");
console.log(p.getName());

const obj1 = { a: 1};
const obj2 = {a: 1};
const obj3 = {b: 1};

function areEq(o1, o2) {
    return JSON.stringify(o1)  === JSON.stringify(o2)

}

console.log(areEq(obj1, obj2)); // true
console.log(areEq(obj1, obj3)); // false



const arr = [1, 2, 3, 4];
console.log(arr.length);
function powArr(arr) {
  let newarr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = arr[i] ** 2;
  }
  return newarr;
} 
console.log(powArr(arr));

*/
/*
const arr = [0, "2", 3, 4, "s", 0];

function castArr(arr) {
    let newArr = []
     for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string") {
         newArr.push(Number(arr[i]))
      }
      else if (typeof arr[i] == "number") {
        newArr.push(Boolean(arr[i]));
        console.log(Boolean(arr[i]));
        //console.log(newData);
      }
    }
    return newArr;
 }
 console.log(castArr(arr));


 const arr = [0, "2", 3, 4, "s"];
 let newArr = [];
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] == "number") {
        newArr.push(Boolean(arr[i]));
      console.log(Boolean(arr[i]));
}
}

*/