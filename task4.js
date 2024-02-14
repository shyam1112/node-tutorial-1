const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{


    const url = req.url;

    if(url === "/learn"){
        fs.readFile('./sample.txt',"utf8",(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);
            console.log(data);
            res.end();
        })
    }else{
        res.writeHead(404,{"content-Type":"text/plain"});
        res.end("Not Found");
    }
})

server.listen(3000);