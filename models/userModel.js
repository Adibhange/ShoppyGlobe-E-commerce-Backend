import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cart: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Cart",
			required: true,
		},
	],
});

export default User = mongoose.model("User", userSchema);
