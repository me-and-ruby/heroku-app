const express=require('express');

const app=express();

const PORT=process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send("<h1>Hello there</h1>")
})
app.get('/about',function(req,res){
    res.send("<h1>About Page here</h1>")
})


app.listen(PORT,function(){
    
})