import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	try {
		const token = authHeader && authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) {
				return res.status(403).json({ message: "Invalid JWT Token" });
			}
			req.user = user;
			next();
		});
	} catch (error) {
		res.status(401).json({ message: "Unauthorized" });
	}
};

export default authMiddleware;
