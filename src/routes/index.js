const adminRouter = require('./admin');
const productsRouter = require('./products');
const collectionRouter = require('./collections');
const accountsRouter = require('./accounts');
const siteRouter = require('./site');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/accounts', accountsRouter);
    app.use('/products', productsRouter);
    app.use('/collections', collectionRouter);
    app.use('/', siteRouter);
}

module.exports = route;