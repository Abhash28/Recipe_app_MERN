const express = require("express");
const { signup, Login, getUser } = require("../controller/userLogin");
const userRouter = express.Router();

userRouter.post("/signUp", signup);
userRouter.post("/login", Login);
userRouter.get("/user/:id", getUser);
module.exports = userRouter;
