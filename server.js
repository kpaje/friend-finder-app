var express = require("express");
var app = express();
var path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var PORT = process.env.PORT || 3000;

















app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});