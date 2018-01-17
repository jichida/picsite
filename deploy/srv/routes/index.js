const express = require('express');
const router = express.Router();
const Index = require('../models/index.js');

/* GET home page. */
router.get('/', Index.index);
router.get('/navmain/:nav', Index.navmain);
router.get('/album/:nav/:albumid/:imgname', Index.album);
router.get('/notalbum/:nav', Index.notalbum);

module.exports = router;
