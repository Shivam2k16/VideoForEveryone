const express = require('express');
const app = express();
const infoRoutes = express.Router();

// Require Info model in our routes module
let Info = require('../models/Info');

// Defined store route
infoRoutes.route('/add').post(function (req, res) {
  let info = new Info(req.body);
  info.save()
    .then(info => {
      res.status(200).json({'info': 'info in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
infoRoutes.route('/').get(function (req, res) {
    Info.find(function (err, infor){
    if(err){
      console.log(err);
    }
    else {
      res.json(infor);
    }
  });
});

// Defined edit route
infoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Info.findById(id, function (err, info){
      res.json(info);
  });
});

//  Defined update route
infoRoutes.route('/update/:id').post(function (req, res, next) {
    Info.findById(req.params.id, function(err, info) {
    if (!info){
      return next(new Error('Could not load Document'));
    }
    else {
        info.song_name = req.body.song_name;
        info.description = req.body.description;
        info.size = req.body.size;
        info.image_url = req.body.image_url;
        info.song_url = req.body.song_url;
        info.extra = req.body.extra;

        info.save().then(info => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
infoRoutes.route('/delete/:id').get(function (req, res) {
    Info.findByIdAndRemove({_id: req.params.id}, function(err, info){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports =infoRoutes;