import express from "express";
import {
	addCartProduct,
	deleteCartProduct,
	getAllCartProducts,
	updateCartProductQuantity,
} from "../controllers/cartProductControllers.js";
const router = express.Router();

router.get("/", getAllCartProducts);
router.post("/", addCartProduct);
router.put("/:id", updateCartProductQuantity);
router.delete("/:id", deleteCartProduct);

export default router;
