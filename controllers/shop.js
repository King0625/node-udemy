const Product = require('../models/product');

exports.getProducts = (req, res) => {
    // console.log(`shop.js`, adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/products',
        });
    });

}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',

        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your cart',
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your orders',
    });
}

exports.getCheckout = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/checkout', {
            path: '/checkout',
            pageTitle: 'Checkout',
        });
    });
}