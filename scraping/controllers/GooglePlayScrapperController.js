var googleplayscrapper = require('../models/GooglePlayScrapper');

module.exports.appslistbydev = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googleplayscrapper().AppsListByDev("facebook")
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};


module.exports.appscategory = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googleplayscrapper().AppsCategory()
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};

module.exports.appslistbycategory = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googleplayscrapper().AppsListByCategory('asd')
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};


