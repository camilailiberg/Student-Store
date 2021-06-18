import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Food from "../Food/Food";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await axios.get(
					"http://localhost:3001/student-store/products"
				);
				const products = res?.data?.products;
				if (products) {
					setProducts(products);
				}
			} catch (err) {
				console.log(err);
			}
		};

		fetchProducts();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/student-store" element={<Home products={products} />} />
					<Route
						path="/student-store/food"
						element={<Food products={products} />}
					/>
					<Route
						path="/student-store/products/:productId"
						element={<Product />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
