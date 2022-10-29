/*class People {
    constructor (options){
        this.name = options.name;
        this.position = options.position;
        this.company = options.company;
    }
    info(){
        console.log("Base info ", this.name);
    }
};

const irina = new People({name:"Irina", 
position: 'Dev', 
company:"Dev.pro"
});

class JSdev extends People {
    constructor(options){
        super(options)
        //this.room=options.room
    }
    
    info(){super.info(); console.log("new", this.name);}
get roomNum(){ return this._room;}
set roomNum(num){this._room=2+num;}


}


const dev = new JSdev ({name:"Vasa", 
position:"QA", 
company:"Dev.pro", 
room:33
});
dev.roomNum = 5;
console.log(Object.keys(dev));
*/
/*
function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = () => {
    return this.name;
    console.log(this.name);
  };
  const tom = new Person('Tom');
  console.log(tom.getName()); 
  console.log(tom); 
*/
/*
  const Employees = function (name, age, position, status) {
    this.name=name,
    this.position = position,
    this.age = age,
    this.status = status
  };
  
  Employees.prototype.getDataInfo = function() {
    return console.log(`${this.name} has ${this.age} years and takes ${this.position} position(${this.status})`);
  }
  const vasya = new Employees("Vasya", 22, "dev", "active");
  const lena = new Employees("Lena", 34, "BA", "busy"); 
  const petya = new Employees("Petya", 44, "QA", "active");
  
  lena.getDataInfo(); 
  vasya.getDataInfo(); 
  petya.getDataInfo(); 
  
  */



  /*
You have a team of 3 people - Vasya, Lena and Petya
For each employee, you want to create an object -
 which contains information about the name - position - 
 age and status of the employee

You also need to add a function (method) getDataInfo to 
the class - which will collect a message of the form
'NAME has AGE years and takes POSITION position(STATUS)'
Use classes
Expected results:
lena.getDataInfo(); - "Lena has 34 years and takes BA position(busy)
vasya.getDataInfo(); - "Vasya has 22 years and takes dev position(active)"
petya.getDataInfo(); - "Petya has 44 years and takes QA position(active)"
*/
class Employees {
    constructor (name, age, position, status){
    this.name = name;
    this.position = position;
    this.age = age;
    this.status = status;
    }
  
  getDataInfo() {
    return console.log(`${this.name} has ${this.age} years and takes ${this.position} position(${this.status})`);
  }
  
  };
  const vasya = new Employees("Vasya", 22, "dev", "active");
  const lena = new Employees("Lena", 34, "BA", "busy");
  const petya = new Employees("Petya", 44, "QA", "active");
  
  lena.getDataInfo();
  vasya.getDataInfo();
  petya.getDataInfo();
  
  
  const foo = (a, b) => {
    return a + b;
  };
  
  describe("Practicing with tests", () => {
    it('sum two num in foo:', ()=>{
      const a=1;
      const b = 2;
      const res = foo(a,b);
      expect(res).toBe(3);
    
    })
  }); // modify this
  


  /**
 * Write test to check 
 * that objects equal after
 * calling function boo
 */
const obj1 = {
  name: "Test"
};

const obj2 = {
  name: "John"
};
const boo = (obj1, obj2) => {
  obj1.name = obj2.name;
};

describe("Practicing with tests", () => {
  it("two obj:", ()=> {

  })
expect(obj1).toEqual(obj2);

}); // Modify this