// JavaScript Document
// New app.js file with express
var express = require("express");
var app = express();

app.use(function(req, res, next){
	console.log(`${req.method} request for '${req.url}'`);
	next();
})

app.use(express.static("./"));

app.listen(8080);

console.log("Express luister op port 3000");

module.exports = app;
