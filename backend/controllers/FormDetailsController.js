const FormDetails = require('../models/FormDetails')
module.exports.appsearch = async function (req, res) {
    try {
        var bodyInfo = req.body
        if (1) {
            var response = await new FormDetails().appSearch(bodyInfo);
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};

module.exports.getappdetails = async function (req, res) {
    try {
        var bodyInfo = req.body
        if (1) {
            var response = await new FormDetails().getAppDetails(bodyInfo);
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};