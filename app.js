const { log } = require('console');
const fs= require('fs')
const http =require('http')

http.createServer((request,reponse)=>{
    if(request.url == "/"){
        fs.readFile("index.html", (err,data) => { 
            if (data){
                reponse.end(data);
            }
        });
    }

    if (request.url =="/home"){
        reponse.write("<h1>hello world from home</h1>");
        console.log(request)
        reponse.end();
    }
})

.listen (3000,()=>console.log('server running on post 3000'))