//this keyword
//this - refers current object
console.log("window :",window);
console.log("this :",this);

    let obj ={
        firstName : "jhon",
        lastName : "cena",
        age :23,
        printAge :function(){
            console.log("age :", this.age)
        }
    }
    console.log("firstName :",obj.firstName);
    console.log("lastName :",obj.lastName);
    obj.printAge();

    function greet(person1, person2){
        console.log(`Hello ${person1} and ${person2}, my name is ${this.firstName} ${this.lastName}`);
    }

greet("Athin","Athul");

greet.call(obj,"Athin","Athul");
greet.apply(obj,["Athin","Athul"]);
let result = greet.bind(obj,"Athin","Athul");
console.log("result: ",result);
result();