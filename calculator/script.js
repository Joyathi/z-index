var screen = document.getElementById("screen");

function btnclick(value){
    screen.value += value;
}

function clearscreen(){
    screen.value ="";
}

function findResult (){
    var result = eval(screen.value)
    screen.value = result;
}


// var p =document.getElementById("p");

// function DECREASE(value){
//     p.value + value
// }
// function RESET(value){
//     p.value ="";
// }
// function INCREASE(value){
//     p.value =""
// }