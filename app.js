//jshint esversion: 6

// require method is used
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var items = ["buy food", "cook food","eat food"];
var item = "";


// get method id used
app.get("/", function(req, res) {
  var today = new Date();
  var option = {
    weekday: "long",
    day:"numeric",
    month:"long"
  };
var day = today.toLocaleDateString("hi-IN",option);

  res.render("list", {
    kindOfDay: day,
    newListItem: items
  });

});


// post method id used
app.post("/",function(req,res){
  item = req.body.newItem;
  items.push(item);
  console.log(item);
  res.redirect("/");

});



app.listen(3000, function() {
  console.log("server is running at 3000 port");
});
