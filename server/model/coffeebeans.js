const mongoose = require('mongoose');
const coffeebeansSchema = mongoose.Schema({
    itemName : {
        type: String,
        required :true,
    },
    itemQuantity : {
        type: Number,
        required :true,
    },
    itemBought : {
        type: Boolean,
        required :true,
    },
});

const CoffeeBean = module.exports = mongoose.model('CoffeeBean', coffeebeansSchema);

