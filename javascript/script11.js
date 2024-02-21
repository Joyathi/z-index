
setTimeout(() =>{
    let user = users.find((e) => e.id===id);

    if(user){
        resolve(user);
    }else{
        reject("User not found");
    }
{

}
})



async function getUser(){
    let user = await findUser(2);
    console.log("user :",user);
}
getUser();