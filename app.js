var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//var indexRouter = require('./routes/index');
var accountsRouter = require('./routes/api/accounts');
var playlistRouter = require('./routes/api/playlist');
var channelRouter = require('./routes/api/channel');
var indexRouter = require('./routes/index');
var db = require('./config').mongoURI;

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// serve static files from react
app.use(express.static(path.join(__dirname, 'client/build')));

// mongoDB connection setup
mongoose
    .connect(
	db, { useNewUrlParser: true,
	      useUnifiedTopology: true }
    )
    .then(() => console.log("successfully connected to mongodb"))
    .catch(err => console.log(err));

// configure express routers

app.use('/api/accounts', accountsRouter);
app.use('/api/playlist', playlistRouter);
app.use('/api/channel', channelRouter);
app.use('*', indexRouter); 

// redirect all requests that don't match above to react-router


var port = 4000;
module.exports = app.listen(port);
