function countDown(n){
        
    if (n==0){
        console.log("Done");
    }else{
        console.log(n);
        countDown(n-1)//recursive call(a function calling itself)
    }
}

countDown(3); // Normal function call

// n=3 ->else block -> logs 3 -> recursive call countDwon(2)

             //n=2 -> else block -> logs2 ->recursive call countDown(1)

             //n=1 -> else block -> logs 1 ->recurive call countDwon(0)
                //n=0 -> if block ->logs Done

                const decreasebtn= document.getElementById("decreasebtn");
                const resetbtn = document.getElementById("resetbtn");
                const increasebtn=document.getElementById("increasebtn");
                const number=document.getElementById("number");
                
                