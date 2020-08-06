var PlayStore = require('../models/PlayStore');

module.exports.getplaystoreinfo = async function (req, res) {
    try {
        bodyInfo = req.body
        var pkgName=bodyInfo.pkgName
        if (pkgName) {
            response = await new PlayStore(pkgName).getPlayStoreInfo()
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};