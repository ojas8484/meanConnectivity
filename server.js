const express = require('express');
const port = 5100;
const app = express ();
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
app.listen(port , function(){
    console.log("server is active");
})
async function getConnection(req,res){
    let result = await client.connect();
    let db = result.db("marvellous");
    let collection = db.collection("batches");
    let response = await collection.find({}).toArray();
    console.log(response[0]);
};
getConnection();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
app.get('/',function(req,res){
    res.send("Server is live !");
})
app.get('/getBatches', async function(req,res){
    let result = await client.connect();
    let db = result.db("marvellous");
    let collection = db.collection("batches");
    let response = await collection.find({}).toArray();
    let dataDetail = response[0];
    res.json({dataDetail});
})