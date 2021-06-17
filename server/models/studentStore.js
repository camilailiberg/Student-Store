// const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class StudentStore {
	static async listProducts() {
		// list all items in the products array
		const products = storage.get("products").value();
		console.log(products);
		return products;
	}
}

module.exports = StudentStore;
