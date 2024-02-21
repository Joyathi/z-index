let xhr = new XMLHttpRequest();
xhr.open("get",'https://fakestoreapi.com/products')

xhr.send();

xhr.onreadystatechange = function (){
    console.log("readystate : ", xhr.readyState);
    console.log("status :",xhr.status);

    if (xhr.readyState===4){
        if (xhr.status===200);{
            console.log("result :",xhr.response);
            console.log("type of (result) :",type(result));

            let parsed_result = JSON.parse(result);
            console.log("parsed_result :",parsed_result);
            //console.log('typeof(parsedresult):',typeof(parsed_result))

            let box = document.getElementById("container");
            console.log("box :",box)

            let box1 = "";

             for(let i =0; i<parsed_result.lenth; i++){
                 box1= box1 +
                 <div class="box">
                     <p class="id">${parsed_result[i].id}</p>
                     <h3 class="title">${parsed_result[i].title}</h3>
                     <p class="price">${parsed_result[i].price}</p>
                     <p class="description">${parsed_result[i].description}</p>
                     <p class="id">${parsed_result[i].category}</p>
                  
                 </div>
            }
            box.innerHTML =box1;
        }
    }
}
