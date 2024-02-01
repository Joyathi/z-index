const decreasebtn= document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");

increasebtn.onclick=function(){
    count++;
    countlabel.textcontent =count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textcontent =count;}