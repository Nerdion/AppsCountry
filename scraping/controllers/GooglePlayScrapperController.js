var googleplayscrapper = require('../models/GooglePlayScrapper');

module.exports.appslistbydev = async function (req, res) {
    try {
        var bodyInfo = req.body
        bodyInfo['devName'] = 'facebook'
        if (1) {
            response = await new googleplayscrapper().AppsListByDev(bodyInfo)
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
        var bodyInfo = req.body
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
        var bodyInfo = req.body
        bodyInfo['category'] = 'GAMES'
        if (1) {
            response = await new googleplayscrapper().AppsListByCategory(bodyInfo)
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};


