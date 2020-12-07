const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    trackId: {},
    processor:{},
    amount:{},
    status:{},
    transactionId:{}
});

module.exports = mongoose.model('Payment', paymentSchema);