const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL || "your-mongodb-url-from-cli-tools";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the MongoDB successfully");

    const fetched_data = mongoose.connection.db.collection("food-pantry");
    const data = await fetched_data.find({}).toArray();

    const food_category = mongoose.connection.db.collection("food-category");
    const categoryData = await food_category.find({}).toArray();

    global.food_items = data;
    global.food_category = categoryData;

    //console.log("Fetched data from food-pantry: ", data);
    //console.log("Fetched data from food-category: ", categoryData);
  } catch (err) {
    console.error("Some error to connect", err);
  }
};

module.exports = { connectToMongoDB };
