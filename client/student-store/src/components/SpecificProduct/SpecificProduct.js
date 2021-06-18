import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const defaultImage =
	"https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

export default function SpecificProduct() {
	const { productCategory } = useParams();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPostByCategory = async () => {
			setIsLoading(true);

			try {
				const res = await axios.get(
					`http://localhost:3001/student-store/products/category/${productCategory}`
				);

				if (res?.data?.products) {
					setProducts(res.data.products);
				} else {
					setError("Product(s) not found");
				}
			} catch (err) {
				console.log({ err });
				setError("Product(s) not found");
			}

			setIsLoading(false);
		};

		fetchPostByCategory();
	}, [productCategory]);

	const renderProductContent = () => {
		if (isLoading) {
			return <h1>is loading</h1>;
		}
		if (error) {
			return (
				<>
					<h1>Error</h1>
					<p className="error">{String(error)}</p>
				</>
			);
		}

		return (
			<div className="product-content">
				{products.map((product) => (
					<>
						<Link
							className="Products"
							to={`/student-store/products/${product.id}`}
						>
							<div
								className="product-preview-image"
								style={{
									backgroundImage: `url(${product.image || defaultImage})`,
								}}
							>
								<></>
							</div>
							<div className="product-preview-body">
								<div className="product-preview-name">
									<h1>{product.name}</h1>
								</div>
							</div>
							<div className="product-preview-footer">
								<span className="product-preview-price">${product.price}</span>
							</div>
						</Link>
					</>
				))}
			</div>
		);
	};

	return <div className="SpecificProduct">{renderProductContent()}</div>;
}
