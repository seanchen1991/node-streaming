'use strict';

var express = require('express');
var app = express();
var badges = require('./middleware/badges');

app.use(express.json());  // returns middleware that interprets json on a request

app.post("/", badges.save, badges.send);

app.listen(8000);
