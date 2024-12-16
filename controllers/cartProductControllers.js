import Product from "./../models/productModel.js";
import Cart from "./../models/cartModel.js";

/**
 * POST /cart
 * Get all cart products
 */
export const getAllCartProducts = async (req, res) => {
	try {
		const cartProducts = await Cart.find();
		if (cartProducts.length === 0) {
			res.status(404).json({ message: "No cart products found" });
			return;
		}
		res.status(200).json(cartProducts);
	} catch (error) {
		res.json({ message: error.message });
	}
};

/**
 * POST /cart
 * Add new cart product
 */
export const addCartProduct = async (req, res) => {
	const { productId, quantity } = req.body;

	const product = await Product.findById(productId);
	if (!product) {
		res.status(404).json({ message: "Product not found" });
		return;
	}

	try {
		const cartProduct = new Cart({
			productId,
			quantity,
		});
		await cartProduct.save();
		res.status(201).json(cartProduct);
	} catch (error) {
		res.json({ message: error.message });
	}
};

/**
 * PUT /cart/:id
 * Update cart product quantity
 */
export const updateCartProductQuantity = async (req, res) => {
	const { id } = req.params;
	const { quantity } = req.body;

	try {
		const cartProduct = await Cart.findById(id);
		if (!cartProduct) {
			res.status(404).json({ message: "Cart product not found" });
			return;
		}
		cartProduct.quantity = quantity;
		await cartProduct.save();
		res.status(200).json(cartProduct);
	} catch (error) {
		res.json({ message: error.message });
	}
};

/**
 * DELETE /cart/:id
 * Delete cart product
 */
export const deleteCartProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const cartProduct = await Cart.findByIdAndDelete(id);
		if (!cartProduct) {
			return res.status(404).json({ message: "Cart product not found" });
		}
		res
			.status(200)
			.json({ message: "Cart product deleted successfully", cartProduct });
	} catch (error) {
		res.json({ message: error.message });
	}
};
