// lưu trữ toàn bộ dữ liệu của ứng dụng,cầu nối giữa 2 thành phần View và Controller

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true },
    imgf: { type: String, required: true },
    imgb: { type: String, required: true },
    imgZoomf: { type: String, required: true },
    imgZoomb: { type: String, required: true },
    price: { type: String, required: true },
    select: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
}, );

// Add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Product', Product);