let xhr = new XMLHttpRequest();
xhr.open("get",'https://fakestoreapi.com/products')

xhr.send();

xhr.onreadystatechange = function (){
    console.log("readystate : ", xhr.readyState);
}