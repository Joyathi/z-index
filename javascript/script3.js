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
