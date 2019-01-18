'use strict';

var repository = require('../../lib/mdrRepository');

module.exports = {
    get: function mdr_get(req, res) {
        res.json(repository.get(req.params['Adquirente']))
    }    
};