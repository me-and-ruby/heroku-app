const express=require('express');

const app=express();
const PORT=process.env.PORT || 3000;

app.set('view engine', 'ejs');



app.get('/',function(req,res){
    res.render('pages/index');
})
app.get('/about',function(req,res){
    res.render('pages/about');
})


app.listen(PORT,function(){
    
})