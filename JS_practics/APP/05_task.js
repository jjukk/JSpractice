/*function foo(){
    console.log('1');
}

function boo(){
    console.log('2');
}

foo();

setTimeout(()=>{
    console.log('3');
}, 5000);

boo();


let a=2;
console.log(a);
const promise1 = new Promise ((aa, reject1)=>{
    if(a===1){
        aa ("success");
    }
    reject1 ('a is no 1');
});             
//promise1.then(re)
promise1.then(res11 => console.log(res11), err=> console.log(err));
a=1;
console.log(a);
promise1.then(res11 => console.log(res11)).catch(err=> console.log(err));


function checkMyName(name) {
    let chName = name.length;
    return new Promise((res, rej) => {
      if (chName %2 == 0) {
        res('Your name is even');
      } else {
         rej(new Error ('Your name is odd'));
      }
    });
  }
  
  checkMyName("John")
    .then((v) => v)
    .catch((e) => e.message);
  
    checkMyName("Joh2n")
    .then((v) => v)
    .catch((e) => e.message);

    */