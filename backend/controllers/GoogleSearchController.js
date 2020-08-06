var googlesearch = require('../models/GoogleSearch');

module.exports.getSearchTermsResult = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googlesearch().getSearchTermsResult("facebook")
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};


module.exports.getSearchData = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googlesearch().getSearchData()
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};

module.exports.getCountryName = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new googlesearch().getCountryName('asd')
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};