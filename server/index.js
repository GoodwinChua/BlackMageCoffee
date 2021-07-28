// 1
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

// 1
var app = express();


const route = require('./route/routes.js');

// 2
var dbport = 27017;
var dbname = 'coffeebeanList';
var dburi = 'mongodb://localhost:' + dbport + '/' + dbname;

// 2b
const port = 3000;

//2
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB port: ' + dbport);
});

mongoose.connection.on('error', (err) => {
    console.log('error: ' + err);
})
//2

app.use(cors());

app.use(express.json());

app.use('/api', route);

//3
app.get('/', (req, res) => {
    res.send("Gutenmorgen")
});


//2b
app.listen(port, () => {
    console.log("I'm listening..." + port);
})