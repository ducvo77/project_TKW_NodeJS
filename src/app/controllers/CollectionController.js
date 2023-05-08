const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class CollectionController {


    // [GET] /collections/all
    all(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('collections/all', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    // [GET] /collections/tops
    tops(req, res, next) {
            Product.find({})
                .then((products) =>
                    res.render('collections/tops', {
                        products: mutipleMongooseToObject(products),
                    }),
                )
                .catch(next);
        }
        // [GET] /collections/bottoms
    bottoms(req, res, next) {
            Product.find({})
                .then((products) =>
                    res.render('collections/bottoms', {
                        products: mutipleMongooseToObject(products),
                    }),
                )
                .catch(next);
        }
        // [GET] /collections/outerwear
    outerwear(req, res, next) {
            Product.find({})
                .then((products) =>
                    res.render('collections/outerwear', {
                        products: mutipleMongooseToObject(products),
                    }),
                )
                .catch(next);
        }
        // [GET] /collections/footwear
    footwear(req, res, next) {
            Product.find({})
                .then((products) =>
                    res.render('collections/footwear', {
                        products: mutipleMongooseToObject(products),
                    }),
                )
                .catch(next);
        }
        // [GET] /collections/hat
    hat(req, res, next) {
            Product.find({})
                .then((products) =>
                    res.render('collections/hat', {
                        products: mutipleMongooseToObject(products),
                    }),
                )
                .catch(next);
        }
        // [GET] /collections/bags
    bags(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('collections/BAGS', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }


}

module.exports = new CollectionController();