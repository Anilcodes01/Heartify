import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const userController = {
  async register(req, res) {
    try {
      const { email, password, name, role } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          error: "User with this email already registered...!",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ email, password: hashedPassword, name, role });

      await user.save();

      res.status(200).json({
        message: "User registered succesffully...!",
      });
    } catch (error) {
      res.status(500).json({
        error: "Registration failed...!",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          error: "User with this email does not exist...!",
        });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({
          error: "Invalid password...!",
        });
      }

      res.status(200).json({
        message: "Login successful",
        userId: user._id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Login failed",
      });
    }
  },
};
