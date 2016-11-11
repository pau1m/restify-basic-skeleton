'use strict';
var uuid = require('uuid'),
    log = require('../services/log.service');

function generateLog(req, res, next) {
    log = log.child({reqId: uuid.v1(), module: 'scrooge-module'});
    req.log = log;
    next();
}

exports.generateLog = generateLog;