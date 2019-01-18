'use strict';

var mdr = require('./mdr.json');
var jp = require('jsonpath')

module.exports = {

    getmdr: function (Adquirente, Bandeira, Tipo) {
        if (!Adquirente || !Bandeira || !Tipo)
            throw new Error("Error - MDR (getmdr) : Missing Parameter");
        Bandeira = Bandeira.charAt(0).toUpperCase()+Bandeira.substr(1).toLowerCase();
        Tipo = Tipo.charAt(0).toUpperCase()+Tipo.substr(1).toLowerCase();
        return jp.query(mdr, '$..[?(@.Adquirente=="Adquirente '+Adquirente+'")].Taxas[?(@.Bandeira=="'+Bandeira+'")].'+Tipo);
    },

    get: function (Adquirente) {
        if (!Adquirente)
            throw new Error("Error - MDR (get) : Missing Parameter");
        return jp.query(mdr, '$..[?(@.Adquirente=="Adquirente '+Adquirente+'")]');
    },

    all: function () {
        return mdr;
    }

};
