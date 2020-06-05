const path = require('path');

const shopController = require('../controllers/shop');

const adminController = require('../controllers/admin');

const express = require('express');

const router = express.Router();


router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;