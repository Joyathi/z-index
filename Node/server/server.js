const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient } = require('mongodb');
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

    console.log('connected successfully to server');

    return 'done.';
}



const server = http.createServer(async (req, res) => {

    const db = client.db(dbName);
    const collection = db.collection(collName);

    let req_url = req.url;
    console.log("req_url :", req_url);

    let parsed_url = url.parse(req_url);
    console.log("parsed_url :", parsed_url);

    if (parsed_url.pathname === '/' && req.method === "GET") {

        res.writeHead(200, { 'content-Type': 'text/html' });
        res.end(fs.readFileSync('../client/index.html'));

    } else if (parsed_url.pathname === "/style.css" && req.methord === 'GET') {
        res.writeHead(200, { 'Content-Type': "text/css" });
        res.end(fs.readFileSync('../client/style.css'));

    } else if (parsed_url.pathname === '/script.js' && req.methord === 'GET') {
        res.writeHead(200, { 'Content-Type': "text/javascript" });
        res.end(fs.readFileSync('../client/script.js'));
    }

    if (req.method === "POST" && parsed_url.pathname === "/submit") {

        let body = "";

        req.on('data', (chunks) => {
            console.log("Chunks :", chunks);
            body = chunks.toString();
            console.log("body :", body);
        })

        req.on("end", async () => {
            let formDatas = querystring.parse(body);
            console.log("formDatas :", formDatas);

            //Do something with the submitted data (eg : save to a database)
            console.log("Name :", formDatas.name);
            console.log("email :", formDatas.email);
            console.log("password :", formDatas.password);

            //inserting formDatas to the database
            await collection.insertOne(formDatas)
                .then((message) => {
                    console.log("Document inserted successfully");

                    let response = {
                        success: true,
                        statusCode: 200,
                        data: formDatas,
                        message: "FormDatas submitted successfully"

                    }
              

            let json_response = JSON.stringify(response);
            console.log("json_response :", json_response)

            res.writeHead(200, { "content-Type": "text/json" })
            res.end(json_response)
        })
            .catch((error) => {
                console.log("Document insertion failed");

                let response = {
                    success: false,
                    statusCode: 400,
                    data: formDatas,
                    message: "Failed"
                }
                let json_response = JSON.stringify(response);
                console.log("json_response :", json_response)

                res.writeHead(response.statusCode, { "content-Type": "text/json" })
                res.end(json_response)
            })

        })
    }




//Get

if (req.method ==="GET" && parsed_url.pathname ==="/getdata") {
 let datas = await collection.find().toArray();

 if(datas){
    let response ={
     
           "success": true,
            statusCode: 200,
            data: datas,
            message: "success"
    }
    let json_response = JSON.stringify(response);

    res.writeHead(200, {'content-type':'text/json'});
    res.end(json_response);

}else{
    let response ={
     
        "success": true,
         statusCode: 200,
         data: datas,
         message: "success"
 }
    let json_response = JSON.stringify(response);

    res.writeHead(200, {'content-Type' : 'text/json'});
    }
 
}


//update
if (req.method === "Put" && parsed_url.pathname === "/update") {
    let body = "";

    req.on('data', (chunks) => {
        body += chunks.toString();
    });

    req.on("end", async () => {
        let formDatas = querystring.parse(body);
      
        const updateQuery ={_id :formDatas._id};
        const updateData ={
            $set :{
                name: formDatas.name,
                email: formDatas.email,
                password:formDatas.password
            }
        };


        //inserting formDatas to the database
        await collection.updateOne(updateQuery,updateData)
            .then((message) => {
                if(XPathResult.modification >0){
                console.log("Document inserted successfully");

                let response = {
                    success: true,
                    statusCode: 200,
                    data: formDatas,
                    message: "FormDatas submitted successfully"

                };
          

        let json_response = JSON.stringify(response);
        res.writeHead(200, { "content-Type": "text/json" })
        res.end(json_response)
            }else{
                console.log("Document not found");
                
            let response = {
                success: false,
                statusCode: 400,
                data: formDatas,
                message: "Document not found"
            };
            let json_response = JSON.stringify(response);
            res.writeHead(response.statusCode, { "content-Type": "application/json" })
            }
    })
        .catch((error) => {
            console.log("Document insertion failed");

            let response = {
                success: false,
                statusCode: 400,
                data: formDatas,
                message: "Failed to update document"
            }
            let json_response = JSON.stringify(response);
            console.log("json_response :", json_response)

            res.writeHead(response.statusCode, { "content-Type": "application/json" })
            res.end(json_response)
        });

    })
}

//Delete

if (req.method === "DELETE" && parsed_url.pathname === "/delete") {
    let body = "";

    req.on('data', (chunks) => {
        body += chunks.toString();
    });

    req.on("end", async () => {
        let formDatas = querystring.parse(body);
      
        const deleteQuery7 = {_id :formDatas._id};
        

        //inserting formDatas to the database
        await collection.deleteOne(deleteteQuery)
            .then((result) => {
                if(result.deletedcount >0){
                console.log("Document deleted successfully");

                let response = {
                    success: true,
                    statusCode: 200,
                    data: formDatas,
                    message: "FormDatas deleted successfully"

                };
          

        let json_response = JSON.stringify(response);
        res.writeHead(200, { "content-Type": "text/json" })
        res.end(json_response)
            }else{
                console.log("Document not found");
                
            let response = {
                success: false,
                statusCode: 400,
                data: formDatas,
                message: "Document not found"
            };
            let json_response = JSON.stringify(response);
            res.writeHead(response.statusCode, { "content-Type": "application/json" })
            res.end(json_response);
        }
    })
        .catch((error) => {
            console.log("Document insertion failed");

            let response = {
                success: false,
                statusCode: 400,
                data: formDatas,
                message: "Failed to delete document"
            }
            let json_response = JSON.stringify(response);
            res.writeHead(response.statusCode, { "content-Type": "application/json" })
            res.end(json_response)
        });

    })
}
});



connect()
    .then((message) => {
        console.log("message :", message);
    })
    .catch((error) => {
        console.log("error :", error);
    })
    .finally(() => {
        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        })
    })


