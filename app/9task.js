// console.log("9 Task");
// var theThing = null;
// var replaceThing = function(){
//     var originalThing = theThing;
//     var unused = function(){
//         if (originalThing)
//                console.log("Hi");
//          };
// theThing = {
//     longStr: new Array(1000000).join("*"),
//     someMethod: function(){
        
//     }
// };
// };
// setInterval(replaceThing, 1000);
// longStr = new Array(1000000).join("*");
// console.log(longStr);
/*
let timeoutResult = null;
const timeoutCall = () => setTimeout(() =>{ 
timeoutResult = "finished";
console.log('1 setTimeout: '+timeoutResult);},5);

const t=()=>setTimeout(()=>{
    console.log('2 try block: '+timeoutResult);
}, 1000);

const a = async ()=>{

await timeoutCall();
   //console.log('2 try block: '+timeoutResult);
setTimeout(() =>(console.log('3 setTimeout: '+timeoutResult)),5000);
}
a();
t();
console.log('1 end: '+timeoutResult);
setTimeout(() =>(console.log('4 setTimeout: '+timeoutResult)),2000);
*/






// There is an animal farm, all animals have names and ages.
// Animals come in different types: Cats, Dogs, Cows.
// Describe the data structures for the animal farm and write
// a function that generates animals - after that,
// you need to generate each type of animals (cat-5, dog-3, cow-7)
// separately and place them in one resulting array

// WHAT IS EXPECTED IN IMPLEMENTATION:
// Parent class for all animals
// The Cat class is a descendant of the Animal class
// The Dog class is a descendant of the Animal class
// The Cow class is a descendant of the Animal class
// Function to get a certain number of animals
// expected result format:
//animals =[
//     {
//       "name": "Cat 0",
//       "age": 0
//   },
//   {
//       "name": "Cat 1",
//       "age": 1
//   },
//   {
//       "name": "Cat 2",
//       "age": 2
//   },
//   {
//       "name": "Cat 3",
//       "age": 3
//   },
//   {
//       "name": "Dog 0",
//       "age": 0
//   },
//   {
//       "name": "Dog 1",
//       "age": 1
//   },
//   {
//       "name": "Dog 2",
//       "age": 2
//   },
//   {
//       "name": "Cow 0",
//       "age": 0
//   },
//   {
//       "name": "Cow 1",
//       "age": 1
//   },
//   {
//       "name": "Cow 2",
//       "age": 2
//   },
//   {
//       "name": "Cow 3",
//       "age": 3
//   },
//   {
//       "name": "Cow 4",
//       "age": 4
//   },
// ]

// Parent class for all animals
// class Animal {
//   constructor(name, age){
//     this.name=name;
//     this.age=age;
//   }
// }

// // The Cat class is a child of the Animal class
// // Has the same fields as Animal
// class Cat extends Animal {}

// // The Dog class is a child of the Animal class
// // Has the same fields as Animal
// class Dog extends Animal {}

// // The Cow class is a child of the Animal class
// // Has the same fields as Animal
// class Cow extends Animal {}

// // Function to get a certain number of animals
// function generateAnimals(type, count) {
//   let generateArr = [];
//   for(let i=0; i<=count;i++){
//     if (type==="Cat") {let cat = new Cat(type+" "+i, i); generateArr.push(cat);}
//     if (type==="Dog") {let dog = new Dog(type+" "+i, i); generateArr.push(dog);}
//     if (type==="Cow") {let cow = new Cow(type+" "+i, i); generateArr.push(cow);}
    
//   }
//   return generateArr;
// }

// const cats = generateAnimals("Cat", 5);
// const dogs = generateAnimals("Dog", 3);
// const cows = generateAnimals("Cow", 7);
// const animals = [...cats, ...dogs, ...cows];
// console.log(animals);





// We have two subclasses, Developer and Designer.
// Designers can design (method design(item), that can return the message:
//"<firstName> designed <item>"),
// and developers can write code(method code(item), that can return the message:
//"<firstName> coded <item>"),.
// Both inherit from the "Human" class (needs to have firstName, lastName and
// sayHello() method. This method can return the message: "Hello, I'm <firstName>" ).

//Create develpoper ({"firstName": "Valeriy", "lastName": "Ivanov"})
//Create designer ({"firstName": "Olha", "lastName": "Iakova"})

class Human {
    constructor(firstName, lastName){
            this.firstName=firstName;
             this.lastName=lastName;
    }
             sayHello(){ return console.log(`Hello, I'm ${this.firstName}`);}  
    
}

class Designer extends Human{
    design(item){console.log(`${this.firstName} designed ${item}`);}
}


class Developer extends Human{
    code(item){console.log(`${this.firstName} coded ${item}`);}
}

const developer=new Developer("Valeriy", "Ivanov");
const designer=new Designer("Olha", "Iakova");
designer.sayHello();
developer.sayHello();
designer.design("UI");
developer.code("JS");
//module.exports = { developer, designer };