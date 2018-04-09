var express = require('express');
var path = require('path');
var mysql = require('mysql');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//var methodOverride = require('method-override');
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`); 


var index = require('./routes/index');
var users = require('./routes/users');
var detail = require('./routes/expense-detail'); 
var report = require('./routes/report');
var app = express();
var cors = require('cors');


app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb'}));
app.use(cors());

app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(session({secret:"secretpass123456", resave: false,
                            saveUninitialized: true,cookie: { secure: true }}));
app.use(cookieParser());
app.use('/', index);
app.use('/user', users);
app.use('/detail', detail);
app.use('/report', report);
module.exports = app;