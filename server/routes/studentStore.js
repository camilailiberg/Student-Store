const express = require("express");
const StudentStore = require("../models/studentStore");
const router = express.Router();
const { NotFoundError, BadRequestError } = require("../utils/errors");

// get list of products
router.get("/products", async (req, res, next) => {
	try {
		const products = await StudentStore.listProducts();
		res.status(200).json({ products });
	} catch (err) {
		next(err);
	}
});

// get list of users
router.get("/users", async (req, res, next) => {
	try {
		const users = await StudentStore.listUsers();
		res.status(200).json({ users });
	} catch (err) {
		next(err);
	}
});

// get one product
router.get("/products/:productId", async (req, res, next) => {
	try {
		const productId = req.params.productId;
		const product = await StudentStore.fetchProductById(productId);
		if (!product) {
			throw new NotFoundError("Product not found");
		}
		res.status(200).json({ product });
	} catch (err) {
		next(err);
	}
});

// get one user
router.get("/users/:userId", async (req, res, next) => {
	try {
		const userId = req.params.userId;
		const user = await StudentStore.fetchUserById(userId);
		if (!user) {
			throw new NotFoundError("User not found");
		}
		res.status(200).json({ user });
	} catch (err) {
		next(err);
	}
});

// create a new user
router.post("/users", async (req, res, next) => {
	try {
		const user = req.body.user;
		// if (!user) {
		// 	return next(new BadRequestError("No users found in request"));
		// }
		const newUser = await StudentStore.createUser(user);
		res.status(201).json({ user: { newUser } });
	} catch (err) {
		next(err);
	}
});

// // create new order
// router.post("/order", async (req, res, next) => {
// 	try {
// 		const transaction = req.body.transaction;
// 		const newTransaction = await Bank.recordTransaction(transaction);
// 		res.status(201).json({ transaction: newTransaction });
// 	} catch (err) {
// 		next(err);
// 	}
// });

module.exports = router;
