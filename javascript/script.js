console. log("Hello world, from external javascript");

//single line comment

// this is a
// mulitline
// Comment

 
// variables
// variables is simply a name of Storage location
var a;//variable declaration, var-variable scope
a = 10;//varaible initialization

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
    console.log("a :", a);//can access varible a before the line it is declared
    var a;
    a=100;
}
console.log ("a :",a);
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
    let boolture=ture;
    console.log("boolture: ",boolture);
    console.log("type of boolture ;",typeof(boolture))

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
    console.log("trimmedstring:",trriedstring)
    console.log("trimmedstring length:",trimmedstring.length)

    let lefttrimmedstring=str.trim();//remove space from left and right
    console.log("lefttrimmedstring:",lefttrriedstring)
    console.log("lefttrimmedstring length:",lefttrimmedstring.length)

    let Righttrimmedstring=str.trim();//remove space from left and right
    console.log("righttrimmedstring:",righttrriedstring)
    console.log("righttrimmedstring length:",righttrimmedstring.length)

    let substring = str.substring(1,3);
    console.log("substring:",substring);

    letreplacedstring = str.replace("lo","iw");
    console.log("replacedstring:",replacedstring);

    console.log("is the string starts with h or not ?", str.startsWith("H"))
    console.log("is the string end with h or not ?", str.startsWith("o"))

    let splittedstring =str.splt (',');//converts string to an array
    console.log("joinedstring :", joinedstring);

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
    let d =--40
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
    age>18console.log("allowed"); console.log("not allowed");
    
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
let a = 10;//variable
let arr =(10,20,"hello",true,false,underfined,null);//Array

let fruits = ["apple","orange","graps","jackfruit","pappaya","pineapple"];
console.log("fruits :", furits);
//Array methords