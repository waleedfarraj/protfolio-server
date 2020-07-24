"use strict"
// declaring a varialble to use express library
const express = require("express");
const { request, response } = require("express");
// require calling the library 

// intialize the server 
const server =express();

// declare a port  
const PORT = process.env.PORT || 3000;

server.listen(PORT,() => { 
    console.log('I am listening to port' , PORT);
});
server.use(express.static("./puplic"));

server.get("/test",(request,response)=>{
    response.send("you are awsome");
})
// http://localhost:3000/test

server.get('/data',(request,response)=>{
    let cars =[
{
name:'ferrari'
},
{
name:'ford'
}
    ];
    response.json(cars);
})