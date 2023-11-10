import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

export { UserModel };
