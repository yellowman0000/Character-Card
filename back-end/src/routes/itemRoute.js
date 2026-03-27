const express = require('express');
const router = express.Router();
const { getUltramans } = require('../controllers/itemController')

router.get('/', getUltramans);

module.exports = router;