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
    mongoose.connect('mongodb://localhost:27017/ng7audio', { useMongoClient: true,useNewUrlParser: true ,
  auth: {
    user: "shivam",
    password: "shivam@789"
  }}).then(
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

 

module.exports = app;