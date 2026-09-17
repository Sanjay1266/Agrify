/**
 * Agrify Backend Server
 * Express, MongoDB, JWT Authentication & API Routes
 */

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Secret Key
const SECRET_KEY = process.env.JWT_SECRET || "agrify_secret_token_key_1018";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/agrify";

// MongoDB Connection with graceful fallback
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB database: Agrify"))
  .catch(err => {
    console.warn("MongoDB connection warning (running in standalone/dev mode):", err.message);
  });

// User Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const UserLogin = mongoose.model("UserLogin", userSchema);

// Health Check / Root Status
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Agrify API server running", timestamp: new Date() });
});

// Register User
app.post("/register", async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await UserLogin.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserLogin({ name, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const user = await UserLogin.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { username: user.username, name: user.name, id: user._id },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(200).json({ 
      message: "Login successful", 
      token, 
      name: user.name, 
      username: user.username 
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});

// Authentication Middleware
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized: Missing Token" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

// Profile Route
app.get("/profile", authenticateUser, async (req, res) => {
  try {
    const user = await UserLogin.findOne({ username: req.user.username }).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Agrify API server is running on port ${PORT}`);
});

module.exports = app;
