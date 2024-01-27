{
    //work-23
let arr=[1,2,3,4,-2]
console.log(arr);

//Average of an array
function arrAvg(arr){
    let s=0;
    for(leti=0;i<arr.length;i++){
        s=s+arr[i];
    }
    console.log("sum:",s)
    console.log("Average :",s/ arr.length)
}

arrAvg(arr);


//minimum number
function arrMin(arr){
    let minValue = arr[0];
    for(i=0;i<arr.length;i++){
        if (arr[i] < minValue){
            minValue=arr[i];
        }
    }
    console.log("minVlue :",minValue);
}


arrMin(arr);

//negative to postive
function numArr(arr){
    let a=arr(0);
    for (let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=arr[i] *-1;
        }
        console.log(arr[i])
    }
    

}
numArr(arr)
}
{
    let arr=[1,2,3,4,-2,5];
    console.log(arr);

    //sum of odd and even numbers
    function sumArr(arr){
        let sum1=0;
        let sum2=0;

        for(let i=0;i < arr.length;i++){
            if(arr[i]%2 == 0){
                sum1=sum1+ arr[i];

            }
            if (arr[i]%2 !=0){
                sum2=sum2+arr[i]
            }

        }
    }
}





