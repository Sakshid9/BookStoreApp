import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password and save new user
    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });

  } catch (error) {
    console.log("Signup Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user
    const user = await User.findOne({ email });

    // 2. THIS IS THE FIX: Check if user exists BEFORE checking the password
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 3. Now compare the password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 4. Send success response
    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("Login Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};