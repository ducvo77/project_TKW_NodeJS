const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                products = products.map((product) => product.toObject());
                res.render('home', { products });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
