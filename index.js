const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config(); // To load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON
const cors = require('cors');
app.use(cors());

const jwt = require("jsonwebtoken");
const SECRET_KEY = "1018"; // Use a secure key

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    username: { type: String, unique: true },
    password: String
});

// Create Model
const UserLogin = mongoose.model("UserLogin", userSchema);

// Register a New User (POST Request)
app.post("/register", async (req, res) => {
    try {
        const { name, username, password } = req.body;

        // Check if username already exists
        const existingUser = await UserLogin.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new UserLogin({ name, username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
});

// Login Route with JWT Token
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await UserLogin.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { username: user.username, name: user.name }, // Payload
            SECRET_KEY,
            { expiresIn: "1h" } // Token expiry
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
});


// Middleware to authenticate user using JWT
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid token" });
    }
};

// API Route to Fetch Logged-in User Details
app.get("/profile", authenticateUser, async (req, res) => {
    try {
        const user = await UserLogin.findOne({ username: req.user.username }).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user profile" });
    }
});


// Start the Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
