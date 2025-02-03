import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 1992;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
