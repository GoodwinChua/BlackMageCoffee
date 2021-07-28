var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
const route = require('./route/routes.js');

var dbport = 27017;
var dbname = 'coffeebeanList';
var dburi = 'mongodb://localhost:' + dbport + '/' + dbname;

const port = 3000;
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB port: ' + dbport);
});

mongoose.connection.on('error', (err) => {
    console.log('error: ' + err);
})

app.use(cors());

app.use(express.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.send("Gutenmorgen")
});

app.listen(port, () => {
    console.log("I'm listening...");
})