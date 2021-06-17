const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class StudentStore {
	static async listProducts() {
		// list all items in the products array
		const products = storage.get("products").value();
		console.log(products);
		return products;
	}

	static async listUsers() {
		// list all users in the users array
		const users = storage.get("users").value();
		return users;
	}

	static async fetchUserById(userId) {
		// fetch a single user
		const user = storage
			.get("users")
			.find({ id: Number(userId) })
			.value();
		return user;
	}

	// fetch a single user
	static async fetchProductById(productId) {
		const product = storage
			.get("products")
			.find({ id: Number(productId) })
			.value();
		return product;
	}

	// create a new user
	static async createUser(user) {
		if (!user) {
			throw new BadRequestError(`No user sent.`);
		}
		const requiredFields = ["name", "email"];
		requiredFields.forEach((field) => {
			if (!user[field] && user[field] !== 0) {
				throw new BadRequestError(`Field: "${field}" is required in user`);
			}
		});

		const users = await StudentStore.listUsers();
		const userId = users.length + 1;
		const createdAt = new Date().toISOString();

		const newUser = { id: userId, createdAt, shoppingCart: [], ...user };

		console.log(newUser);
		storage.get("users").push(newUser).write();

		return newUser;
	}
}

module.exports = StudentStore;
