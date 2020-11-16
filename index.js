const express=require('express');
const bodyparser=require('body-parser');
const index=require('./route/todo')


const app=express();
const PORT=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(express.static('public'));


app.use('/', index);
app.get('/about',function(req,res){
    res.render('pages/about');
})


app.listen(PORT,function(){
    
})