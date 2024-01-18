//break and continue

for(let i=0; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
 }

 console.log(`/n`);

 for(let i=0; i<10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
 }

//   Function definition
function printHello(){
    console.log("Hello world");
}

printHello();//Function call

//function with return
function printNum(){
    console.log(1);
    console.log(2);
    console.log(3);
    return;
    console.log(4);
    console.log(5);
    console.log(6);
}

printNum();

//function that return a value
function getNum(){
    console.log("function that return a number");
    return 10;
}

let num= getNum()
console.log("num:", num);

//function with parameters
function logNum(a,b,c){
    console.log("a :",a);
    console.log("b:", b);
    console.log("c:",c);
}
logNum(30,40,50);

//call by value

let a = 25;
console.log("\na Before:",a)

function update(a){
console.log(`\nInside function block`);
console.log("a :", a);
a=100;
console.log("a:",a);
}

update(a);

console.log("/n a after : ",a);

//call by reference
let arr =[1,2,3];
console.log("/narr :",arr);

function updateArr(arr){
    console.log("/nInside function");
    console.log("arr (before):",arr);

    arr[1] =200;
    console.log("arr (after) :", arr)

}
 updateArr(arr);
 console.log("arr :",arr);

 let obj= {
    name :"mike",
    email : "mike@gmail.com",
    isAdmin :true,
    
 }


 //program to reverse a string
 let str = "Hai";

 let reverse="";
 for(let i= str.length - i; i >=0 ; i--){
//i =2 -> ture -> reverse=reverse + str[i] -> reverse = "" str[2] = "" + "i"

    reverse=reverse + str [i];
 }
 console.log("reverse : ", reverse)