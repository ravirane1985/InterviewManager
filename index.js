'use strict';

var express = require('express');
var kraken = require('kraken-js');
var options = require('./lib/spec')();

var app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
