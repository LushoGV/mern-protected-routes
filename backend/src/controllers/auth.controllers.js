import User from "../models/User.js";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config.js";

const createToken = (userId) => {
  const token = jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) return res.status(404).json("user not found");

  const passwordIsValid = await user.validatePassword(password);

  if (!passwordIsValid) return res.status(401).json("incorrect password");

  const token = createToken(user.id);
  user.token = token;
  await user.save();

  res.json({token: token});
};

export const signIn = async (req, res) => {
  const { username, email, password } = req.body;
  
  const emailInUse = await User.find({email : email})
  if(emailInUse.length !== 0) return res.status(401).json("email already registered")

  const user = await User.create({
    username,
    email,
    password,
  });

  const newPassword = await user.encryptPassword(password)
  user.password = newPassword

  const token = createToken(user.id);
  user.token = token;
  await user.save();

  res.json({token: token});
};
