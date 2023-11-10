import express from "express";
import { getAllUsers, registerUser, loginUser } from "../controllers/userController.js";

const userRoutes = express.Router();

// Getting all users
userRoutes.get("/", async (req, res) => {
  try {
    const user = await getAllUsers();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Error fetching users" });
  }
});

// Registering the user
userRoutes.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const result = await registerUser(firstName, lastName, email, password);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Login route
userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginUser(email, password);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Error during login" });
  }
});

export { userRoutes };
