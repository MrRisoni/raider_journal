const CharDAO = require('../daos/character_dao.js');


function getRaidProgress(req, res) {
    CharDAO.getRaidProgress(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}


module.exports = {getRaidProgress}
