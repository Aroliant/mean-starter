const express = require('express');
const productCtl = require('../controllers/product.controller');

const router = express.Router();
module.exports = router;

router.route('/:productID').get(productCtl.getProduct);
router.route('/all/:offset').get(productCtl.allProducts);
router.route('/search/:keyword').get(productCtl.searchProducts);
