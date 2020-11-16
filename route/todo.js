const express=require('express');

const route=express.Router();

var entries=[];
// route.locals.entries = entries; 

route.get('/',function(req,res){

    res.render('pages/index.ejs',{entries: entries})
})
route.post("/", function(request, response) {
    if (!request.body.name) {
       response.status(400).send("Entries must have body.");
    return;
    }
    console.log(request.body.name)
    entries.push({
    name: request.body.name,
    published: new Date()
    });
    response.redirect("/");
   });

module.exports=route;