//closure (A function along with its environment)

function outerfunction (){
    let outervariable = 25;

    return function innerfunction(){
        return outervariable;
    }
}

let result=outerfunction();
console.log("result :",result);
console.log("result() :", result());

//let innerfuction= function innerfunction();
//return otervariable;
//}

//console.log("innerfunction :",innerfunction);
//console.log("innerfunction() :",innerfunction());


//Fibonacci series
//0 1 1 2 3 5 8 .....

function Fibonacci(limit){
    let a =0;
    console.log(a);
    let b = 1;
    console.log(b);

    let sum = 0;

    while(sum < limit){
        sum= a+b;
        console.log(sum);
        a =b;
        b =sum;
    }
}

Fibonacci(5);
//limit = 5
//0
//1
//sum = 0
//while
//0 < 5 true -> sum = a+b -> sum= 0+1=1 ->log 1 -> a=1, b=1
//while(1 < 5)-> true
//sum = a+b -> sum = 1 +1 = 2 -> log 2 -> a=1, b =2
//while (2 <5) ->sum = a+b ->sum = 1 + 2 = 3 -> log 3 -> a = 2, b = 3
//while   (3 <5) ->sum = a+b ->sum = 2 + 3 = 5-> log 3 -> a = 2, b = 4
//while(5<5) -> false -> loop stops


//18-02-2024

//MULTIPLICATION TABLE


// function multiplication(){}
    // let a=1;
    // console.log(a);
    // let b = 1;
    // console.log(b);

    // let sum = 1;

    // // for(a=i; a<=10; a++);
    // // console.log(sum)
    // // a=b
    // b=sum

    // while(sum<limit){
    //     sum=a*b;
    //     console.log(sum);
    //     a=b;
    //     b=sum;

    // let a=2;
    // b=1;
    // c=a*b;

    // for(b=1; b<=10 ; b++)

 //program to reverse a string
 let str = "Hai";

 let reverse="";
 for(let i= str.length - i; i >=0 ; i--){
//i =2 -> ture -> reverse=reverse + str[i] -> reverse = "" str[2] = "" + "i"

    reverse=reverse + str [i];
 }
 console.log("reverse : ", reverse)


 //Nested loop
{
 let str ="";
 for(let i = 0; i<= 2; i++){

    for(let j = 0 ; j<=i ;j++){
        str = str + "*";
    }
    str = str + '\n';
 }
 console.log(str);

 // i = 0 -> true->
        // j=0

}