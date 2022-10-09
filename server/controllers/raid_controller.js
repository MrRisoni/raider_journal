const RaidDao = require('../daos/raid_dao.js');


function getWorldProgress(req, res) {
    RaidDao.getWorldProgress().then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}



module.exports = {getWorldProgress}