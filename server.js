var express = require("express");
var  app = express();


app.use(express.static('public'));



app.get('/', function(req,res){
    res.sendfile(__dirname+'/public/index.html');
})


app.get('/concept', function(req,res){
   // res.send("here we will tell the story of concept")
    res.sendfile(__dirname+'/public/concept.html');
})

app.get('/design', function(req,res){
    // res.send("here we will tell the story of design")
    res.sendfile(__dirname+'/public/design.html');
})

app.get('/process', function(req,res){
    // res.send("here we will tell the story of the process")
    res.sendfile(__dirname+'/public/process.html');
})



app.get('/template', function(req,res){
    // res.send("here we will tell the story of the process")
    res.sendfile(__dirname+'/public/template.html');
})



app.listen(process.env.PORT, process.env.IP, function(){
  console.log(" I am listening on some port");
});