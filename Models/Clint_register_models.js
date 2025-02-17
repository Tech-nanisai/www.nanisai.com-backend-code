//backend/Models/Clint_register_models.js

import mongoose from "mongoose";
// Define the user registration schema
const UserRegisterSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/^\d{10}$/, "Please enter a valid phone number"],
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            validate: {
                validator: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value),
                message: "Password must include uppercase, lowercase, number & special character.",
            },
        },
    },
    { timestamps: true } // Adds createdAt & updatedAt timestamps
);

const ClintRegister = mongoose.model("Clint_Registered_Details", UserRegisterSchema);
export default ClintRegister;
