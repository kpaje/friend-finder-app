var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/app'));

// ROUTING
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});