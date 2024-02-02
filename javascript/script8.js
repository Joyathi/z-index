// //this keyword
// //this - refers current object
// console.log("window :",window);
// console.log("this :",this);

//     let obj ={
//         firstName : "jhon",
//         lastName : "cena",
//         age :23,
//         printAge :function(){
//             console.log("age :", this.age)
//         }
//     }
//     console.log("firstName :",obj.firstName);
//     console.log("lastName :",obj.lastName);
//     obj.printAge();

//     function greet(person1, person2){
//         console.log(`Hello ${person1} and ${person2}, my name is ${this.firstName} ${this.lastName}`);
//     }

// greet("Athin","Athul");

// greet.call(obj,"Athin","Athul");
// greet.apply(obj,["Athin","Athul"]);
// let result = greet.bind(obj,"Athin","Athul");
// console.log("result: ",result);
// result();

// //contructor function
// function person(name,age,mark){
//     this.name = name;
//     this.age =age;
//     this.mark=mark;
//     this.printAge = function (){
//         console.log(`iam ${this.name} and my age is ${this.age}`);
//     }
// }
// let person1=new person("jack",25,95);
// console.log("person1 :",person1);
// person1.printAge();

// let person2=new person("rose",28,95);
// console.log("person1 :",person2);
// person2.printAge();

// //prototype
// person.prototype.printMark= function(){
//     console.log(`i am ${this.name} and my mark is ${this.mark}`);

// }
// person1.printMark();
// person2.printMark()


//classess

class person{
    name;
    age;
    mark;

    constructor(name,age,mark){
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

printAge(){
    console.log(`iam ${this.name} and my age is ${this.age}`)
   }
}

let person1 = new person("jack",25,95);
console.log("person1 :",person1);
person1.printAge();

let person2 = new person("Rose",25,95);
console.log("person2 :",person2);
person1.printAge();

//prototype
person.prototype.printMark= function(){
    console.log(`i am ${this.name} and my mark is ${this.mark}`);
}
person1.printMark();
person2.printMark();

class Animal{
    name;

    constructor(name){
        this.name =name;
    }
    walk(){
        console.log(`${this.name} is an animal and ${this.name} is now walking...`);
    }
}

let animal= new Animal ("Zebra");
console.log("animal :",animal);
animal.walk()

//Here Animal class becomes parent class of Dog class
class Dog extends Animal{
    color;
    constructor(name,color){
        super (name);//calls parent class constructor
        this.color=color;
    }
    //method overriding
    walk(){
        console.log(`${this.name} is a Dog and ${this.name} is walkig...`);
    }
    eat(){
        console.log(`${this.name} is eating...`);

    }
    printColor(){
        console.log(`${this.name} is a ${this.color} Dog`);
    }
}

let dog = new Dog ("Arjun" , "Green");
console.log ("dogc: ",dog);
dog.walk();
dog.eat();
dog.printColor();