const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("...connected");
  } catch (error) {
    console.log("While connecting db err", error);
  }
};

module.exports = connectDB;
