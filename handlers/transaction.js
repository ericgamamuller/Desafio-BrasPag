'use strict';

var repository = require('../lib/mdrRepository');

module.exports = {
    post: function transaction_post(req, res) {
        var mdr = repository.getmdr(req.body.Adquirente, req.body.Bandeira, req.body.Tipo);
        if (mdr)
            res.json(JSON.parse('{"ValorLiquido":'+req.body.Valor * (1 - (mdr / 100))+'}'))
        else
            res.json(JSON.parse('{}'))
    }
};