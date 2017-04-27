// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:8080/euro2012", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});