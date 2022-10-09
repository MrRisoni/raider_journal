const express = require('express')
let router = express.Router()

const raid_controller = require('../controllers/raid_controller');

router.get('/api/raids/world', raid_controller.getWorldProgress);

module.exports = router;
