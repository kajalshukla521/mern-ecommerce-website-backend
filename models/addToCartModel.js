const mongoose = require('mongoose');

const addToCart = mongoose.Schema({
   productId : String,
   quantity : Number,
   userId : String,
},{
    timestamps : true
})


const addToCartModel = mongoose.model("addtoCart",addToCart)

module.exports =addToCartModel