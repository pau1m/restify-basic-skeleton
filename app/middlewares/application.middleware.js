'use strict';

module.exports.doSomeMiddleware = function (req, res, next) {
    var log = req.log;
    log.info('Passing by middleware');
    req.someData = 'using middleware';
    return next();
};
