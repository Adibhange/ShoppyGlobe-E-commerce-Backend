import Product from "./../models/productModel.js";

/**
 * GET /products
 * Get all products
 */
export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		if (products.length === 0) {
			res.status(404).json({ message: "No products found" });
			return;
		}
		res.status(200).json(products);
	} catch (error) {
		res.json({ message: error.message });
	}
};

/**
 * GET /products/:id
 * Get single product from ID
 */
export const getProductById = (req, res) => {
	const { id } = req.params;

	try {
		const product = Product.findById(id);
		if (!product) {
			res.status(404).json({ message: "Product not found" });
			return;
		} else {
			res.status(200).json(product);
		}
	} catch (error) {
		res.json({ message: error.message });
	}
};
