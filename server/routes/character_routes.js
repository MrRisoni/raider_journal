const express = require('express')
let router = express.Router()

const character_controller = require('./../controllers/character_controller');

router.get('/api/character/raid', character_controller.getRaidProgress);

module.exports = router;
