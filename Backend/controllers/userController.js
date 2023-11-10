import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Logic for getting all users
export const getAllUsers = async () => {
  try {
    const data = await UserModel.find();
    return data;
  } catch (err) {
    throw err;
  }
};

// Logic for registering the user
export const registerUser = async (firstName, lastName, email, password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hash,
    });
    await user.save();
    return "User registered successfully";
  } catch (err) {
    throw "User registration failed";
  }
};

// Logic for user login
export const loginUser = async (email, password) => {
  try {
    let user = await UserModel.find({ email });

    if (user.length === 0) {
      return { msg: "User not found" };
    }

    const result = await bcrypt.compare(password, user[0].password);
    if (result) {
      const token = jwt.sign({ userID: user[0]._id }, "project");
      return {
        msg: "User login successful",
        token: token,
      };
    } else {
      return { err: "Login failed" };
    }
  } catch (err) {
    throw { msg: "Login failed", err };
  }
};
