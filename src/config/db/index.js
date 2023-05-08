const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/hades_cuoiky_tkw', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (err) {
        console.log('error: ' + err);
    }
}

module.exports = { connect };
