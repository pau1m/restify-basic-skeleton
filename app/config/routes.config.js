"use strict";
var restify = require('restify'),
    ApplicationController = require('../controllers/application.controller'),
    ApplicationMiddleware = require('../middlewares/application.middleware'),
    logMiddleware = require('../middlewares/log.generator.middleware')

;
function route(server) {
    server.use(restify.fullResponse());
    server.use(logMiddleware.generateLog);

    server.get('/', [
        ApplicationMiddleware.doSomeMiddleware,
        ApplicationController.get
    ]);
}

exports.route = route;
