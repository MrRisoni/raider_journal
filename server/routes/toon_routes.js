const express = require('express')
let router = express.Router()

const toon_controller = require('../controllers/toon_controller');

router.get('/api/toon/raid', toon_controller.getRaidProgress);
router.get('/api/toon/timed/5', toon_controller.getTimedUpTo5);
router.get('/api/toon/timed/10', toon_controller.getTimed5To10);
router.get('/api/toon/timed/15', toon_controller.getTimed10To15);
router.get('/api/toon/timed/100', toon_controller.getTimedOver15);
router.get('/api/toon/timed', toon_controller.getTimed);

module.exports = router;
