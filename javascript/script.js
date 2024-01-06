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
}