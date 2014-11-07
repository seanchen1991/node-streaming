'use strict';

var request = require('request');

// Get badges from the pub/sub server
// @param {Function} callback
exports.get = function(callback) {
  request('http://localhost:8000/badges', function(err, res, body) {
    callback(err, JSON.parse(body));
  });
};
