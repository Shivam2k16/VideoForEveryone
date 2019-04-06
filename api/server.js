const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),

    

    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB'),


    passport = require('passport');
    require('./models/db');
    require('./config/passport');
var routesApi = require('./routes/index');

    const infoRoute = require('./routes/info.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );


const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use(passport.initialize());
    app.use('/api', routesApi);
    
      
    app.use('/info', infoRoute); 
    
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });

    // error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;