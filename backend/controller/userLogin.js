const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../model/user");

//for signup
const signup = async (req, res) => {
  // de sturcture the data
  const { name, email, password } = req.body;
  console.log(name, email, password);
  // check if user not give input
  if (!name || !email || !password) {
    res.status(400).json({ message: "Fill all the required field" });
  }
  // check if user is already register
  let userAlreadyFind = await userSchema.findOne({ email });
  if (userAlreadyFind) {
    res.status(400).json({ Message: "user already exist" });
  }
  // convert password in hash function
  const hasedPass = await bcrypt.hash(password, 10);
  //add data in db
  try {
    const addSignupData = await userSchema.create({
      name,
      email,
      password: hasedPass,
    });
    //jwt token
    const token = jwt.sign(
      {
        name,
        email,
        Id: addSignupData._id,
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({ token, addSignupData });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

//for login
const Login = async (req, res) => {
  // destructure data
  const { email, password } = req.body;
  //if email and pass not found then
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password Required" });
  }
  // find user that available in database or not
  let findUser = await userSchema.findOne({ email });
  if (!findUser) {
    res.status(404).json({ message: "User already present in database " });
  }

  //comapre password that save in db and provoide by user
  let camparePass = await bcrypt.compare(password, findUser.password);

  //if pass and user found in db then genrate jwt
  if (findUser && camparePass) {
    let token = jwt.sign(
      { name: findUser.name, email: findUser.email, id: findUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ token, findUser });
  } else {
    res.status(400).json({ message: "Invailed data you Entered" });
  }
};

//get data
const getUser = async (req, res) => {
  const user = await userSchema.findById(req.params.id);
  res.status(200).json({ name: user.name, email: user.email });
};

module.exports = { signup, Login, getUser };
