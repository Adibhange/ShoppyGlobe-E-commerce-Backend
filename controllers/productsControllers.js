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
export const getProductById = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id);
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

/**
 * POST /products
 * Add new product
 */
export const addProduct = async (req, res) => {
	const { name, price, description, image, quantity } = req.body;

	if (!name || !price || !description || !image || !quantity) {
		res.status(400).json({ message: "Please provide all the required fields" });
		return;
	}

	try {
		const newProduct = new Product({
			name,
			price,
			description,
			image,
			quantity,
		});
		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		res.json({ message: error.message });
	}
};
