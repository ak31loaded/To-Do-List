//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items=[];
app.get("/", function(req, res){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

var date=today.toLocaleDateString("en-US", options)
res.render(__dirname+"/views/todolist",{date:date,newitem:items}); // Saturday, September 17, 2016

});

app.post("/",function(req,res){
    if(req.body.but==="remove")
    {
        items=[];
        
    }
    else
    {
    items.push(req.body.item);
    }

    res.redirect("/");
});
app.listen(process.env.PORT||3000, function(){
 console.log("Server started on port 3000.");
});