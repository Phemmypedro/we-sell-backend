const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.DB_URI;

const connectDb = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) =>
      console.error("MongoDB connection failed:", error.message)
    );
};

module.exports = connectDb;
