// backend/Server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", require("./routes/authRoutes"));

app.get("/", (req, res) => {
    res.send("🚀 User Authentication API is running...");
  });

const PORT = process.env.PORT || 1992;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
