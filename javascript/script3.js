let arr =[1,2,3];

//function to calculate sum of elements of a numerical array
function arrSum(arr){

    let sum = 0;

    for (let i = 0; i< arr.length; i++){
        sum = sum +arr [i];
    }
    console.log("sum : ", sum);
}




arrSum(arr);

//function to find maximum value of a numerical array
function arrMax(arr){
    let maxValue = arr[0];

    for(let i =0; i< arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i];
        }
    }
    return maxValue
}
let maxValue = arrMax(arr);
console.log("maxValue : ", maxValue)
       
{
    console.log("add")
}



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

                
//work 
//factoral of a number using reccursive method
//do some research about DOM

//DOM methods

let headings = document.getElementsByName('h1');
console.log('headings[0] :',heading[0].textcontent);
console.log('headings[0] :',heading[0]);

let containers
console.log("divElement1 :",divElement1.textcontent);\


let button = Document.getElementByid('id');
console.log("button :",button);

button.addEventListener('mouseover',function(){
    //alert("Button clicked"):
    console.log("click event fired...")
})

button.addEventListener('mouseout',function(){
    console.log("click event fired...")
})

button.addEventListener('mousedown',function(){
    console.log("click event fired...")
})


button.addEventListener('mouseup',function(){
    console.log("click event fired...")
})

button.addEventListener('mousemove',function(){
    console.log("click event fired...")
})

button.addEventListener('keydown',function(){
    console.log("click event fired...")
})