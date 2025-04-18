const express = require("express");
const router = require("./Routes/recipe");
const connectDB = require("./config/connectionDB");
const cors = require("cors");
const userRouter = require("./Routes/userLogin");
const app = express();

const dotenv = require("dotenv").config();
connectDB();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

//api call for user login
app.use("/", userRouter);

// get api call for recipe
app.use("/recipe", router);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
