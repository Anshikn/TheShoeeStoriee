const mongoose = require("mongoose")
//Schema is the structure of the table

const ProductsSchema = new mongoose.Schema(

  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number },
    old_price: { type: Number },
    date: { type: Date, default: Date.now },
    avilable: { type: Boolean, default: true },
    size: { type: Array },
    brand: { type: String },
  }

)
module.exports = mongoose.model('Product', ProductsSchema)

