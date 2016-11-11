'use strict';
var bunyan = require('bunyan');
var config = require('../config/env.config');

module.exports = bunyan.createLogger({
    name: config.logName,
    level: config.logLevel,
    streams: [
        { stream: process.stdout }
    ],
    serializers: bunyan.stdSerializers
});