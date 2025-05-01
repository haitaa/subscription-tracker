import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: {type: String, required: [true, "Username is required"], trim: true, minLength: 2, maxLength: 50},
        email: {type: String, required: [true, "E-mail is required"], unique: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, "E-mail is invalid"]},
        password: {type: String, required: [true, "Password is required"], minLength: 8},
    },
    {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;