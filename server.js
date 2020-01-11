var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./FriendFinder/app/routing/apiRoutes")(app);
require("./FriendFinder/app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("APP listening on PORT: " + PORT);
    
});
