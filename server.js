var express = require("express");

var bodyParser = require("body-parser");

var logger = require("morgan");

var mongoose = require("mongoose");

var Article = require("./models/articleModel");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

mongoose.connect("mongodb://heroku_7ghbs3ms:que9lsm2bif7j9idjpiiei0473@ds137207.mlab.com:37207/heroku_7ghbs3ms");

var db = mongoose.connection;

db.on("error", function(err) {

  console.log("Mongoose Error: ", err);

});

db.once("open", function() {

  console.log("Mongoose connection successful.");

});

app.get("/api/saved", function(req, res) {

  Article.find({}).exec(function(err, doc) {

    if (err) {

      console.log(err);

    }

    else {

      res.send(doc);

    }

  });

});

app.post("/api/saved", function(req, res) {
  
  var article = new Article(req.body);

  article.save(function(error, doc){

    if(error){

      res.send(error);

    }

    else{

      res.send(doc);

    }

  });

});

app.listen(PORT, function() {

  console.log("App listening on PORT: " + PORT);

});