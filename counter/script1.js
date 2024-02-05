let counter =0;
counterValue = document.getElementById(`counter-value`);

incrementBtn = document.getElementById (`increment-btn`);
incrementBtn.addEventListener (`click`,()=>{
    counter++;
    counterValue.innerHTML= counter;
});

decrementBtn = document.getElementById (`increment-btn`);
decrementBtn.addEventListener (`click`,()=>{
    counter--;
    counterValue.innerHTML= counter;
});
 
resetBtn=document.querySelector(`#reset`);
resetBtn.addEventListener(`click`,reset);

function reset(){
    counter = 0;
    counterValue.innerHTML =counter;
}
