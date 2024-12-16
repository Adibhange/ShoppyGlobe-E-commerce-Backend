import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import productsRoutes from "./routes/productsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

// Connect DB
main()
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(process.env.MONGO_URL);
}

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/products", productsRoutes);
app.use("/cart", authMiddleware, cartRoutes);
app.use("/user", userRoutes);

// Middleware for handling errors
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
