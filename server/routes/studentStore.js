const express = require("express");
const StudentStore = require("../models/studentStore");
const router = express.Router();
// const { NotFoundError } = require("../utils/errors");

router.get("/products", async (req, res, next) => {
	try {
		const products = await StudentStore.listProducts();
		res.status(200).json({ products });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
