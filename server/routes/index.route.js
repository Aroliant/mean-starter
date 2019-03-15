const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/user', require('./user.route'));
router.use('/product', require('./product.route'));

module.exports = router;