/*var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);*/



var app = require('./express');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application

// --------- this is called routing
/*app.get('/hello',function (req, res) {
    console.log();
    res.send({message:"hello from server"});
})*/

app.use(app.express.static(__dirname + '/public/'));

require("./assignment/app");

require ("./test/app.js")(app);

var port = process.env.PORT || 4000;
app.listen(port);