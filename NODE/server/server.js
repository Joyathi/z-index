const http = require('http');
const url = require('url');
const fs =require('fs')
const port =4000;

const server = http.createServer((req,res)=>{

    const req_url =req.url;
    console.log("req_url :",req_url);

    const parsedUrl =url.parse(req.url);
    console.log("parsedUrl :", parsedUrl);

    if(parsedUrl.pathname === '/'){
        res.writeHead(200,{'content-type' : 'text/html'});
        res.end(fs.readFileSync('../client/index.html'));
    }
})

server.listen(port,()=>{
    console.log(`serve running at http://localhost:${port}`);
});