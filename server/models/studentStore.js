const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class StudentStore {
	static async listProducts() {
		// list all items in the products array
		const products = storage.get("products").value();
		return products;
	}
	// fetch a single product
	static async fetchProductById(productId) {
		const product = storage
			.get("products")
			.find({ id: Number(productId) })
			.value();
		return product;
	}
	// fetch all products by category
	static async fetchProductByCategory(productCategory) {
		const products = storage
			.get("products")
			.filter({ category: productCategory })
			.value();
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

		storage.get("users").push(newUser).write();

		return newUser;
	}

	// list all orders in the orders array
	static async listOrders() {
		const orders = storage.get("orders").orderBy("createdAt", "desc");
		return orders;
	}
	// fetch a single order
	static async fetchOrderById(orderId) {
		const order = storage
			.get("orders")
			.find({ id: Number(orderId) })
			.value();
		return order;
	}
	// create a new order
	static async createOrder(order) {
		if (!order) {
			throw new BadRequestError(`No order sent.`);
		}
		const requiredFields = ["productsBought", "email"];
		requiredFields.forEach((field) => {
			if (!order[field] && user[field] !== 0) {
				throw new BadRequestError(`Field: "${field}" is required in user`);
			}
		});

		const orders = await StudentStore.listOrders();
		const orderId = orders.length + 1;
		const createdAt = new Date().toISOString();

		const newOrder = { id: orderId, ...order, createdAt };

		storage.get("orders").push(newOrder).write();

		return newOrder;
	}
}

module.exports = StudentStore;
