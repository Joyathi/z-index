// let btn = document.getElementById("btn");
// console.log("btn: ",btn);

// // btn.addEventListener('click',function (){
// //     let value1 = Number(document.getElementById('value').value);
// //     console.log("value1 :",value1);
// //     console.log("typeof(value1:",typeof(value1))

// //     let value2=Number()(document.getElementById('value').value);
// //     console.log("value1 :",value2);
// //     console.log("typeof(value1:",typeof(value2))

// //     let output1=document.getElementById("output1");
// //     console.log("output1 :",output1);

// //     let output2=document.getElementById("output1");
// //     console.log("output1 :",output2);

// //     output1.innerHTML = value1;
// //     output2.innerHTML = value2;


// // })

function handleClick(){
    let value1 = Number(document.getElementById('value').value);
    console.log("value1 :",value1);
    console.log("typeof(value1:",typeof(value1))

    let value2=Number()(document.getElementById('value').value);
    console.log("value1 :",value2);
    console.log("typeof(value1:",typeof(value2))

    let output1=document.getElementById("output1");
    console.log("output1 :",output1);

    let output2=document.getElementById("output1");
    console.log("output1 :",output2);

    output1.innerHTML = value1;
    output2.innerHTML = value2;
}


setTimeout(function(){
    alert("From setTimeout...")
    },5000);

    setInterval(function (){
        i++;
        console.log("from setInterval");
    },2000);

    let i = 0;
    let x = setInterval(function)