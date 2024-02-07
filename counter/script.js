let number =0
number =document.getElementById ('number')

decreasebtn= document.getElementById('decreasebtn')
decreasetbtn.addEventListener('click',()=>{
 counter--;
 number.innerHTML =counter;
})


increasebtn= document.getElementById('increasebtn')
increasetbtn.addEventListener('click',()=>{
 counter++;
 number.innerHTML =counter;
})