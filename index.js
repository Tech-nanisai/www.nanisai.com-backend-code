import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import clintRegisterRoutes from "./Routes/Clint_register_routes.js"; // ✅ Add .js extension

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/", clintRegisterRoutes);

app.get("/", (req, res) => res.send("🚀 User Authentication API is running..."));

// Start Server
const PORT = process.env.PORT || 1992;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
