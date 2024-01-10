console. log("Hello world, from external javascript");

//single line comment

// this is a
// mulitline
// Comment

 
// variables
// variables is simply a name of Storage location
var x;//variable declaration, var-variable scope
x = 10;//varaible initialization

//rules
/*
1.Name must start with a letter (a to z or A to Z), underscore (_) or doller ($) sign
2.After first letter we can use digits(0 to 9)
3.case sensitive (A and a are treated differently
*/

//varible scope
//Global(function) scope
{
    //can be declared multiple times in a program
    //not blocked scope
    //hoisted
    console.log("y :", y);//can access varible a before the line it is declared
    var y;
    y=100;
}
//console.log ("a :",a);
//block scope
//{}-block
{
    //let and const are nit noisted
    let b;//initialization declarstion can be done in two lines
    b=1;
    b=2;
    console.log("b :",b);//gives error, c is not defined, let varibles cannot be accessed outside the block
    const c=10;//initialization and decleration must be done in single step
    console.log("c :",c);//gives error, c is not deefined,const varibles cannot be accessed out side the block

}
{
    let b;
    b=20;
    console.log("b : ",b);//gives error, c is not defined, let varibles cannot be accessed outside the block

    const c =1000;//initialization and decleration must be done in single step
    console.log("c :",c);//gives error. c is not defined, const variables cannot be accessed outside the block


}

//window'
console.log("window ; ",window);
window.console.log("Hello world");

var fruit="apple";//corrupts window object
console.log("window.fruit ;",window.fruit);

//doesn't corrupt window object
let vechicle= "bike"
console.log("window.vehicle ;", window.vehicle);
const place="idukki";
console.log("window.place");

{
    //datatype

    //String (sequence of charactors) (strinigs are immutable)
    let nmae="jhone";
    console.log("name ; ",name)
    console.log("type of name :",typeof (name))

    //number(represents numerical values)
    let num =100;
    console.log("name :",num);
    console.log(typeof num);
    

    //boolean values (Either ture or false)
    let booltrue=true;
    console.log("boolture: ",booltrue);
    console.log("type of boolture ;",typeof(booltrue));

    let boolfalse= false;
    console.log("boolture:",boolfalse)
    console.log("type of boolfalse ;",typeof(boolfalse))




   //undefined (repersent undefined value)
   let varundefined=undefined;
   console.log("varundefined :", varundefined);
   console.log("type of varundefined :", typeof(varundefined))


   let x;
   console.log("x :",x);

   //Null(repersent no value at all)
   let varNull=null;
   console.log("varNUll :",varNull);
   console.log("type of varNull :", typeof (varNull));

}

{
    //Javascript steing methord
    let str= "Hello";
    console.log("str :",str);

    let stringLength = str.length;//finds length of string
    console.log("stringLength :", stringLength)
     
    let strTouppercase=str.toUpperCase();//converts all letters in string to uppercase
    console.log("str :",str);
    console.log("struppercase :",strTouppercase)

    let strTolowercase=str.toLowerCase();
    console.log("strTolowercase: ",strTolowercase)

    let trimmedstring = str.trim();//remove space from left and right
    console.log("trimmedstring:",trimmedstring)
    console.log("trimmedstring length:",trimmedstring.length)

    let lefttrimmedstring=str.trim();//remove space from left and right
    console.log("lefttrimmedstring:",lefttrimmedstring)
    console.log("lefttrimmedstring length:",lefttrimmedstring.length)

    let righttrimmedstring=str.trim();//remove space from left and right
    console.log("righttrimmedstring:",righttrimmedstring)
    console.log("righttrimmedstring length:",righttrimmedstring.length)

    let substring = str.substring(1,3);
    console.log("substring:",substring);

    let replacedstring = str.replace("lo","iw");
    console.log("replacedstring:",replacedstring);

    console.log("is the string starts with h or not ?", str.startsWith("H"))
    console.log("is the string end with h or not ?", str.startsWith("o"))

    let splittedstring =str.split (',');//converts string to an array
    console.log("splittedstring :", splittedstring);

}

{
    //operators

    //++  add 1
    //-- substract 1
    // preincrement
    let a =10;
    let preincrement = ++a;
    console.log("preincrement :", preincrement);

    //postincrement
    let b=20;
    let postincrement = b++;
    console.log("preincrement:",postincrement);

    //predecrement
    let c =30
    let predecrement =--c;
    console.log("predecrement:",predecrement);

    
    //postdecrement
    let d =40
    let postdecrement =--c;
    console.log("postdecrement:",postdecrement);

    //assignment opeartors
    let x =100;
    console.log("x :", x);
     

    let y =200;
    console.log("y :",y);

    x=y;
    console.log("x : ", x);

    x+=y;//x=x+y
    console.log("x :",x);


}
{
    let a=10;
    let b=11;
    //comparison opertors
    console.log("a==b:",a==b);
    console.log("a !==b:",a!==b);
    console.log("a===b:",a===b);//checks both value and datatype, true if both type and value are same
    console.log("a===b:",a===b);//checks both value and datatype, true if both type and  or value not same
    console.log("a<b:",a<b);
    console.log("a>b:",a>b);
    console.log("a <=b:", a<=b);//ture if a<b or a=b
    console.log("a >=b:", a>=b);//ture if a>b or a=b

    //ternary operator
    let age = 10;
    age>18?console.log("Allowed"):console.log("not allowed");
    
    //logical operator
    let haspassport =true;
    let hasiv =false;

    console.log("logical and");
    age>45&& haspassport && hasid?console.log("Allow"):console.log("not allowed");
    console.log("logical or");
    age>14|| haspassport || hasid?console.log("Allow"):console.log("not allowed");

    console.log("!haspassport :", !haspassport);

    //concatenation
    let val1 ="10";
    let val2 ="20";
    console.log("val1 +val2:",val1+val2);
    //concatenation
    let val3 ="Hello";
    let val4 ="world";
    console.log("val3 +val4:",val3+val4);


}

//ARRAYS
//arrays are varible which can hold more than one value and the values in array is stored in continous memory locations
let a=10;//variable
let arr =(10,20,"hello",true,false,undefined,null);//Array

let fruits = ["apple","orange","graps","jackfruit","pappaya","pineapple"];
console.log("fruits :", fruits);
//Array methords
let apple = fruits[0];
console.log(apple);

let pappaya =fruit[4];
console.log(pappaya);

let nooffruits=fruits.length; //finds the number of elements of an array
console.log(nooffruits);

let fruitsstring=fruits.join('');//converts array to string
console.log(fruitsstring);

let grapeIndex = fruits.indexOf("Grapes");//finds the index number of an element
console.log("grapeIndex :",grapeIndex);

fruits.push("GreenApple");//adds element  to the end of an array
console.log("fruts :", fruits);

fruits.unshift("strawberry");//adds element to the start of an arry
console.log("fruits :",fruits);

fruits.pop(); //Remove element from the end of an array
console.log("fruits :",fruits)

fruits.shift(); //remove element from the start of an array
console.log("furits :",fruits);

//Replacing element in an array
fruits[3]= "watermelon";
console.log("fruits :",fruits);

//splice
let splicedfruits = fruits.splice(1,4);
console.log("fruits :",fruits);
console.log("fruits:",fruits);

fruits.splice(1,0, "bluebarry");
console.log("fruits :",fruits);


{
    let names ="john";
    let arr =["john",18,70];
    console.log("typeof(arr):",typeof(arr));

    //objects
    //A javascript object is an entity stored as key value pairs
    let details ={
        name : "john",
        age : 18,
        mark :70,
    }
     
    console.log("details:",details);
    console.log("typeof(details) :", typeof(details));

    console.log("name :",details.name);
    console.log("age :",details.age);
    console.log("mark :",details.mark);

    //updating value
    details.age =30;
    console.log("details :", details)

    //adding new keyvalue pair
    details.country ="USA"
    console.log("details :",details);

    //in array we can also pass another array and object as values
    let fruit =["apple","orange","graps","jackfruit",["pappaya","pineapple"],{country : "india",state : "kerala"}];
    console.log("fruits :",fruits);

    //Template literals
    let name = "john";
    console.log(`name : ${name}`);


    //Json
    //json(javascript object Notation) is a lighyweight data iterchange format that is eay for
      //humans to read and write and easy for machies to parse and generate

      let obj =`{
        "fruit": "jackfruit",
        "bike" :"hero honda",
        "car"  : "suzuki",
          }`;
       

          console.log("obj : ",obj);
          console.log("typeof(obj:", typeof(obj));
          console.log("fruit :",obj.fruit)
          console.log("bike:",obj.bike)
          console.log("car :",obj.car)

          let data ={
            name : "jhon",
            email :"john@gmail.com",
            password:"jhone123"
          }

          console.log (`data : ${data}`);
          console.log(`typeof(data) : ${typeof(data)}`);

          //converting javascript object to Json
          let jsonDate=jSON.stringly(data);
          console.log(`jsonData :${jsonData}`)

          //parsing Json
          let parsedJsonData = JSON,parse(JsonData);
          console.log(`parsedjsonData :${parsedJsonData}`)
          console.log(`typeof(parsedJsonData) : $ {typeof(parsedJsonData)}`)


};

   

//worl 9-1-2024

let number =[1,2,3,4,5]
console.log("number :",number)

number.push (6);
console.log("number :", number)

number.shift (1);
console.log("number :",number)

let result =Array.isArray(number);
console.log("result :", result)

let index4 =number.indexOf(4);
console.log("index of 4:", index4);


//object

let person ={
    name :"manu",
    age :25,
    city : "new street",
}
 console.log("person :",person)

 person.age =30;
 console.log("person :",person)
 console.log("age :",person.age)

 person.gender ="male";
 console.log("person :",person)

 console.log(object.hasown(person,`country`));

 let address ={
    city : "mycity",
    street :"no21",
    house :"Home 101",
 }
    let personaldetails ={
       ...person,
       ...address
 }


 console.log("persona;details :", personaldetails)
{
 //Javascript condition statement
 let age = 8;

 //if, if-else,if-elseif-else
 //if(age >18){
    //console.log("allowed")
    //}else{
     //   console.log("not allowed")
 //}

 if(age >18){
    console.log("Allowed");
  }else if (age>10 && age <18){
    console.log("Ypu are a kid");
  }else {
    console.log ("Not allowed");
  }

}

{
    let number1 =prompt ("Enter a number");
    let num1= Number(number1);
    console.log("num1 :",num1);
    console.log("typeof(num1):",typeof(num1));

    let number2 =prompt ("Enter a number");
    let num2= Number(number2);
    console.log("num2 :",num2);
    console.log("typeof(num2):",typeof(num2));

    if(num1 >num2){
        console.log(`${num1}greater than ${num2}`);

    }else if(num2 >num1){
        console.log(`${num2}greater than ${num1}`);
    }else if (num1 === num2){
        console.log(`Both are equal`);

    }else{
        console.log("Invalid number");
    }

}

{
    //Switch statment
    let day =Number(prompt("Enter a number for a day"));
     switch(day){
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("tuesday");
            break;
    
        case 3:
            console.log("wednesday");
             break;
                    
        case 4:
            console.log("thursday");
            break;

      case 5:
        console.log("friday");
            break;

      case 6:
        console.log("saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default :
            console.log("Invalid nomber for day");
            break;               
                        
     }

     let color = prompt("Enter a color");

     switch(color){
        case `green`:
            console.log("You can go")
            break;
        case `red`:
            console.log("stop, you cannot go");
            break;
        case`yellow`:
            console.log("slow down,wait for some time");
            break;
        default:
            console.log("Invalid traffic light color");    
        
     }
}
