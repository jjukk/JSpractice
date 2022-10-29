

/*let btn = document.querySelector('#btn'); //knopka
btn.onclick = modalhide;

let show = document.querySelector('#show');
show.onclick=modalshow;

let randBtn = document.querySelector('#randBtn');
randBtn.onclick=randomInteger;

function modalshow(){
    console.log('modalshow');
    let modal = document.querySelector('.modal');
    modal.hidden = false;
}

function modalhide(){
    console.log('modalhide');
    let modal = document.querySelector('.modal');
    modal.hidden = true;
}


let rnd = (function (){
let data={min:0, max:0};
return {
    getMin: function (){return data.min;},
    getMax: function (){return data.max;},
    setMinMax: function (minn, maxx){data.min=minn; data.max=maxx;}
}
})();

function randomInteger (){
    rnd.setMinMax(1,10);
       
    let rand=rnd.getMin()-0.5+Math.random()*(rnd.getMax()-rnd.getMin()+1);
    console.log('min:'+rnd.getMin());
    console.log('max:'+rnd.getMax());
    console.log('randomInteger:'+ Math.round(rand)+" ");
    return Math.round(rand);
      
}

console.log('work');

function myData(){
    console.log("Hi", this);
  }
  myData();
  const addUser ={
    name: "Vasja"
  }
  
  const userData = {
    name: "Irina",
    company:"Dev",
    message: myData,
    viewInfo: function (p1, p2){
        console.log("this.name ", this.name);
        console.log("params ", p1, p2);
    }
  }; 
  console.log("userData", userData);
  userData.message();
  userData.viewInfo.call(addUser, 3, 5);


  function recursFunc(a){
    return function(b){
        sum=10+a+b;
        console.log('result '+sum);
    }
  }
  let result = recursFunc(1);
  result(2);




  const arrr=["a", "b", "c"];
function printArr(arr, index=0){
    console.log(arr[index]);
    if(index<arr.length-1){
        printArr(arr,++index);
    }
}
printArr(arrr);




  function getFactorial(n){
    if (n===1) return n;
    return n*getFactorial(n-1);
  }

  const res=getFactorial(5);
  console.log("res=", res);
  
  const print =(name, age)=> console.log(String(name)+"-"+String(age));

  print("Irina", 34)

  //const sum =(n1, n2)=> {if (n1===n2)return ; return sum(); }

    const sum = (n)=> { if (n===1) return n;
        return n+ sum(n-1);
      }

console.log(sum(5));
 /* function f1(){
    return function (a=2,b=5) {return (a+b)*11};
  }
// modify this function
const sum=f1();
console.log(sum);
*/