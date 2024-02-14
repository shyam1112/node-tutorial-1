
// Tutorial 1 :  Task 1

// function factorial(x){
//     if(x == 1){
//         return x;
//     }
//     return x*factorial(x-1);
// }

// console.log(factorial(6))


//Tutorial 1 : Task 2

// const data = require('./users.json');
// console.log(data);
// console.log(data[0].firstName);


// Tutorial 1 : Task 3

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("url",req.url);
    const url = req.url;
    const method = req.method;
    console.log(method);
    if(url === "/users" && method === "GET"){
        // console.log("hello");
        res.writeHead(200,{"content-Type":"text/html"})
        res.write("This is get method from users.");

    }else if(url === "/users" && method === "POST"){
        // console.log("dfjng");
        res.writeHead(200,{"content-Type":"text/html"});
        res.write("This is post method from users.");
    }else{
        res.write("This is Naither GET and Nor POST");
    }
    
    res.end()
    })
server.listen(3000);
