var PlayStore = require('../models/PlayStore');

module.exports.getplaystoreinfo = async function (req, res) {
    try {
        bodyInfo = req.body
        if (1) {
            response = await new PlayStore("com.facebook.katana").getPlayStoreInfo()
            res.send(response)
        } else {
            res.send({ "Success": false, "Error": error, "Payload": [] })
        }
    } catch (e) {
        res.send({ "Success": false, "Error": e.toString(), "Payload": [] });
    }
};