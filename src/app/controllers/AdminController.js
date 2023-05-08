const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
    // [GET] /admin/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('admin/stored-products', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    // [GET] /admin/trash/products
    trashProducts(req, res, next) {
        Product.findDeleted({})
            .then((products) =>
                res.render('admin/trash-products', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }
}

module.exports = new AdminController();
