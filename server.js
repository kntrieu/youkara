var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('console-stamp')(console, '[HH:MM:ss.l]');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var gapi = require('./routes/gapi');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Using api routing
//Index
app.use('/', index);
//Sample API----------
app.use('/api/v1', tasks);
//Google API----------
app.use('/api/v1', gapi);

app.listen(process.env.PORT || 5000, function(){
	console.log('Server started on port %s', port);
});