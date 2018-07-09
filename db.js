var mongoose = require('mongoose');
mongoose.connect('mongodb://10.30.0.20:27017/api');

var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'customers' }
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }
