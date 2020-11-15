const express=require('express');

const app=express();

var port=process.env.port || 3000;

app.get('/',function(req,res){
    res.send("<h1>Hello there</h1>")
})


app.listen(port,function(){
    
})