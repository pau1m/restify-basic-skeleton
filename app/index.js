"use strict";
var restify = require('restify'),
    router = require('./config/routes.config'),
    config = require('./config/env.config');

var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser());

router.route(server);

server.listen(config.port, function () {
    console.log('listening at port %s', config.port);
});