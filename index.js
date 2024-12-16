import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
