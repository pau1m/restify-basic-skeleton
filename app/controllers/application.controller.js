'use strict';
function ApplicationController(){}

ApplicationController.prototype.get = function(req, res){
    var log = req.log;
    log.info('Returning get function');
    return res.send(200, 'Hello world ' + req.someData);
};

ApplicationController.constructor = ApplicationController;

module.exports = new ApplicationController();