// Backend/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Please enter a valid phone number"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true } // ✅ Adds createdAt & updatedAt fields automatically
);

// Use "User" so the collection is created as "users" in MongoDB
module.exports = mongoose.model("clint_registered_details", UserSchema);
