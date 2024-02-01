// let detailes={
//     firstName :"jack",
//     lastName : "rose",
//     email : "jack@gmail.com",
// }
//  let fruits = ["apple","orange","mango"];

//  //Destructuring 
//  let {firstName,lastName,email} = details;
//  console.log ("firstName :",firstname);
//  console.log ("lastName :",lasttname);
//  console.log ("email :",email);

//  let [fruit1,fruit2,fruit3] = fruits;
//  console.log ("fruit1 ;",fruit1);
//  console.log ("fruit2 ;",fruit2);
//  console.log ("fruit3 ;",fruit3);

 let details={
    firstName :"jack",
    lastName : "rose",
    email : "jack@gmail.com",
    address : {
        street : "mystreet",
        city : "mycity",
        houseNo : 1,
    }
}
 let fruits = ["apple","orange","mango",["avocado","grapes","pineapple"]];

 //Destructuring 
 let {firstName,lastName,email ,address: {street,city,houseNo}} = details;
 console.log ("firstName :", firstName);
 console.log ("lastName :", lastName);
 console.log ("email :",email);
 console.log ("street :" ,street);
 console.log ("city :",city);
 console.log ("houseNo :",houseNo);
{
 let [fruit1,fruit2,fruit3] = fruits;
 console.log ("fruit1 ;",fruit1);
 console.log ("fruit2 ;",fruit2);
 console.log ("fruit3 ;",fruit3);


 let [fruit,fruit5,fruit6] = fruits;
 console.log ("fruit4 ;",fruit4);
 console.log ("fruit5 ;",fruit5);
 console.log ("fruit6 ;",fruit6);

}
 
 //Array function
 let cars = ["Benz","BMW","Maruthi","Audi","BMW"];

 //forEach
 cars.forEach((element)=>{
    console.log(element);
 })

 //Find
 let findResult = cars.find((element)=>{
    return element === "BMW";
 })

 console.log("findResult : ", findResult);

 //Filter
 let filterResult = cars.filter((element)=>{
    return element === "BMW";
 });

 console.log ("filterResult : ",filterResult);

 //Map
 let mapResult = cars.map((element) =>{
    return element = "my-" + element;
    //return element ==="BMW";
 });

 console.log("mapResult :",mapResult);

 //Reduce
 let nums = [1,2,3,4,5];
 let reduceResult = nums.reduce ((sum,element)=>{

 },0);

 console.log("reduceResult :",reduceResult);