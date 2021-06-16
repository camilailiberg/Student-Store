const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		res.status(200).json({
			student_store: "yei",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
