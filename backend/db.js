const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Successfully connected to Mongo");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
