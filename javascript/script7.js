//25 -01-2024

function countDwon(n){

    if (n==0){
        console.log("Done");
    }else {
        console.log(n);
        countDwon(n-1);//recursive call (A function calling it self)
    }
}
countDwon(3);//Normal function call

//n=3 -> else block -> logs 3 -> recursive call countDown(2)
            