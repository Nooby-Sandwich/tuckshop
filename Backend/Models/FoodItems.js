const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
 categoryName: {
   type: String,
   required: true,
 },
 name: {
   type: String,
   required: true,
   unique: true,
 },
 price: {
   type: Number,
   required: true,
 },
 description: {
   type: String,
   required: true,
   unique: true,
 },
});

const FoodItems = mongoose.model('FoodItems', foodItemSchema);

module.exports = FoodItems;