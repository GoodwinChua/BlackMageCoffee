var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var dbport = 27017;
var dbname = 'coffeebeanList';
var dburi = 'mongodb://localhost:' + dbport + '/' + dbname;

const port = 3000;
// mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('Connected to MongoDB port: ' + mongoose.port))
//     .catch((err) => console.log('DB connection error:' + err));

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB port: ' + dbport);
});

mongoose.connection.on('error', (err) => {
    console.log('error: ' + err);
})

app.listen(port, () => {
    console.log("I'm listening...");
})