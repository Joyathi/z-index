const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient } =require('mongodb');
const { error } = require('console');

//connection URL
const mongodb_url = "mongodb://localhost:27017"
const client = new MongoClient(mongodb_url);

//Database Name
const dbName = 'users';
const collName = "users_coll";

async function connect() {
    //use connect method to connect to the server
    await client.connect();

    console.log ('connected successfully to server');

    return 'done.';
}

const server = http.createServer((req,res) =>{

    let req_url = req.url;
    console.log("req_url :",req_url);

    let parsed_url =url.parse(req_url);
    console.log("parsed_url :",parsed_url);

    if(parsed_url.pathname === '/' && req.method === "GET"){

        res.writeHead(200,{'content-Type' : 'text/html'});
        res.end(fs.readFileSync('../client/index.html'));

    } else if(parsed_url.pathname === "/style.css" && req.methord === 'GET'){
        res.writeHead(200,{'Content-Type' : "text/css"});
        res.end(fs.readFileSync('../client/style.css'));

    }  else if(parsed_url.pathname === '/script.js' && req.methord === 'GET'){
        res.writeHead(200,{'Content-Type' : "text/javascript"});
        res.end(fs.readFileSync('../client/script.js'));
    }

    if(req.methord === "POST" && parsed_url.pathname === "/submit"){

        let body="";

        req.on('data',(chunks) => {
            console.log("Chunks :",chunks);
            body = chunks.toString();
            console.log("body :",body);
        })

        req.on("end",() =>{
            let formDatas = querystring.parse(body);
            console.log("formDatas :",formDatas);

            //Do something with the submitted data (eg : save to a database)
            console.log("Name :",formDatas.name);
            console.log("email :",formDatas.email);
            console.log("password :",formDatas.password);

            let response ={
                success :true,
                statusCode :200,
                data : formDatas,
                message : "Form Datas submitted successfully",
            }

            let json_response = JSON.stringify(response);
            console.log("json_response :",json_response)

            res.writeHead(200,{"content-Type" :"text/json"})
            res.end(json_response)
        })
    }

});


connect()
  .then((message) =>{
      console.log("message :",message);
  })
  .catch ((error) =>{
    console.log("error :",error);
  })
  .finally(() =>{
    server.listen(port,() =>{
        console.log(`Server running at http://localhost:${port}`);
    })
  })