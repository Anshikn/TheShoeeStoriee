const mongoose = require("mongoose")
const dbconnects = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/E-Commerce")
    console.log("DB connection succesfullll")

  }
  catch (err) {
    console.log(err.message)
  }
}
module.exports = { dbconnects }