const CharDAO = require('../daos/character_dao.js');


function getRaidProgress(req, res) {
    CharDAO.getRaidProgress(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

function getTimedUpTo5(req, res) {
    CharDAO.getTimedUpTo5(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

function getTimed5To10(req, res) {
    CharDAO.getTimed5To10(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

function getTimed10To15(req, res) {
    CharDAO.getTimed10To15(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}


function getTimedOver15(req, res) {
    CharDAO.getTimedOver15(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

function getTimed(req, res) {
    CharDAO.getTimed(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

function getTimedPerSpec(req,res) {
    CharDAO.getTimedPerSpec(1).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
}

module.exports = {getRaidProgress,getTimedUpTo5,
    getTimedPerSpec,
    getTimed5To10,getTimed10To15,getTimedOver15,getTimed}