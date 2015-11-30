'use strict';

// Lightweight server implementation.
var express = require('express'),
    http = require('http'),
    app = express(),
    server;

server = http.createServer(app);
app.use(express.static(__dirname + '/dist', {maxAge: 1000000}));
server.listen(3500);