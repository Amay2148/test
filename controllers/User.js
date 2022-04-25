const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.user;

const registerUser = async (req, res) => {
  const { email } = req.body;
  const alreadyExistsUser = await User.findOne({ where: { email } });

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }
  const bodyData = req.body;
  const salt = await bcrypt.genSalt(10);
  bodyData.password = await bcrypt.hash(req.body.password, salt);
  const userData = await User.create(bodyData);

  return res.status(201).json({
    success: true,
    data: userData,
  });
};

const loginUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(500).json("User email is incorrect");
  }

  const password_valid = await bcrypt.compare(req.body.password, user.password);
  if (!password_valid) {
    return res.status(500).json("User password is incorrect");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
  return res.status(200).json({
    success: true,

    user: {
      id: user.id,
      token,
    },
  });
};

module.exports = {
  registerUser,
  loginUser,
};
