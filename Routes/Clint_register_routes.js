import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import ClintRegister from "../Models/Clint_register_models.js";

dotenv.config();
const router = express.Router();

// Client Registration API
router.post("/register", async (req, res) => {
    try {
        const { fullName, phoneNumber, email, password } = req.body;

        // Check if user already exists
        const existingClient = await ClintRegister.findOne({ email });
        if (existingClient) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newClient = new ClintRegister({ fullName, phoneNumber, email, password: hashedPassword });
        await newClient.save();

        // Generate JWT Token
        const token = jwt.sign({ userId: newClient._id }, process.env.JWT_SECRET, { expiresIn: "15d" });

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

export default router;
