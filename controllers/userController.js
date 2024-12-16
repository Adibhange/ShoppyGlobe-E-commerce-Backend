import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * POST /register
 * Register a new user
 */
export const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			throw new Error("Missing required fields");
		}
		const user = await User.findOne({ email });
		if (user) {
			throw new Error("Email already exists");
		}

		// Bcrypt password hashing
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(password, salt);

		const newUser = new User({ name, email, password: hashedPass });
		await newUser.save();

		res.status(201).json({ message: "User registered successfully", newUser });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/**
 * POST /login
 * Login user
 */
export const loginUSer = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error("Missing required fields");
		}
		const user = await User.findOne({ email });
		if (!user) {
			throw new Error("User not found");
		}
		const comparePass = await bcrypt.compare(password, user.password);
		if (!comparePass) {
			throw new Error("Incorrect password");
		}

		// Generate JWT token
		const token = jwt.sign({ email }, process.env.JWT_SECRET, {
			expiresIn: "24h", // Expires token in 24 hours
		});
		res.status(200).json({ message: "Login successful", token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
