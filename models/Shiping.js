const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const shippingSchema = mongoose.Schema({
    trackId:{
        type: Number
    },
    senderName:{
        type: String,
        required: true
    },
    recipientName:{
        type: String,
        required: true
    },
    senderLocation:{
        type: String,
        required: true
    },
    destinationLocation:{
        type: String,
        required: true
    },
    packageLocation:{
        type: String,
        required: true
    },
    senderPhone:{
        type: String,
        required: true
    },
    destinationPhone:{
        type: String,
        required: true
    },
    senderEmail:{
        type: String,
        required: true
    },
    destinationEmail:{
        type: String,
        required: true
    },
    senderState:{
        type: String,
        required: true
    },
    destinationState:{
        type: String,
        required: true
    },
    senderLga:{
        type: String,
        required: true
    },
    destinationLga:{
        type: String,
        required: true
    },
    senderCity:{
        type: String,
        required: true
    },
    destinationCity:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now
    }
});

shippingSchema.plugin(AutoIncrement, {
    id:'trackID_seq',
    inc_field:'trackId',
    start_seq: 10000

});

module.exports = mongoose.model('Shipping', shippingSchema);