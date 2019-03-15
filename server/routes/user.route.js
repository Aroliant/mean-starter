const express = require('express');
const userCtl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

router.route('/login').post(userCtl.login);
router.route('/register').post(userCtl.register);
