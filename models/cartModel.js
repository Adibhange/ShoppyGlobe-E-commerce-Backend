import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	products: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
	],
});

export default Cart = mongoose.model("Cart", cartSchema);
