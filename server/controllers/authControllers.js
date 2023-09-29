const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const { compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    // Check if name was entered
    if (!firstname || !lastname) {
      return res.json({
        error: "name is required",
      });
    }
    //check if PASSWORD is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    //Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  //oauth
  if (req.user) {
    res.status(200).json(req.user);
    return;
  }
  //jwt
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const failLogin = (req, res) => {
  res.status(401).json();
};

const logout = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    res.clearCookie("token");
  } else {
    req.logOut();
  }
  res.status(200).json();
};
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  failLogin,
  logout,
};
