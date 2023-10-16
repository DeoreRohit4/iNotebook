const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = " ";
//Create a User  using:POST "api/auth/createuser". Login not require
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid name").isEmail(),
    body(
      "password",
      "Password must be atleast of 5 characters or special-characters "
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // if there  are errors return the bad request and the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10); //generating salt for more secure password
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Authenticate a User  using:POST "api/auth/login". Login not require
router.post(
  "/login",
  [body("email", "Enter a valid name").isEmail()],
  [body("password", "Password can not be blank").exists()],
  async (req, res) => {
    // if there  are errors return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Get logged in user detailes using:POST "api/auth/getuser". Login require
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
