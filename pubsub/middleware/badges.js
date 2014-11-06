'use strict';

var _ = require('underscore');
var model = require('../models/badges');

// Send badges to model to be saved
exports.save = function(req, res, next) {
  var badges = _.clone(req.body);   // Use _.clone to return a deep copy of the req.body object, instead of just a reference
  model.save(badges, function(err) {
    if (err) return res.json(503, {error: true});
    next();
  });
};

// Send badges to pubsub socket in model
exports.send = function() {

};
