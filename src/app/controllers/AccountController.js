// hiển thị yêu cầu từ người dùng thông qua view

const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');
const { send, render } = require('express/lib/response');

class AccountController {

    // [GET] /accounts/login
    login(req, res, next) {
        res.render('accounts/login');
    }

    // [GET] /accounts/register
    register(req, res, next) {
        res.render('accounts/register');
    }

}

module.exports = new AccountController();