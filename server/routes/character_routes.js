const express = require('express')
let router = express.Router()

const character_controller = require('./../controllers/character_controller');

router.get('/api/character/raid', character_controller.getRaidProgress);
router.get('/api/character/timed/5', character_controller.getTimedUpTo5);
router.get('/api/character/timed/10', character_controller.getTimed5To10);
router.get('/api/character/timed/15', character_controller.getTimed10To15);
router.get('/api/character/timed/100', character_controller.getTimedOver15);
router.get('/api/character/timed', character_controller.getTimed);

module.exports = router;
