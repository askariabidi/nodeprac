//console.log("Process: ",process);

//const {sum} = require('./helpers');
//const http = require("http");
//const server = http.createServer((req,res) => {
//res.end("Hello Sadiq Saadat World");
//});
//server.listen(3000);

//var let const
//const total = sum(10, 200);
//console.log("Total: ",total);

//const express = require("express");
//const app = express();

//app.get("/", (req, res) => {
//res.send("Hey Whsaasasasasasadiqas up");
//});

//app.listen(3000);

//const fs = require('fs');
//const fileName = "target.txt";

//fs.watch(fileName, () => console.log(`File Changed!`) )

const fs = require('fs');
const fileName = "target.txt";

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => { //Asynchronus model
    if (err) errHandler(err);
    dataHandler(data);
});

//const data = fs.readFileSync(fileName); //Synchronus blocking programming
//console.log(data.toString());

console.log('node js pro');
