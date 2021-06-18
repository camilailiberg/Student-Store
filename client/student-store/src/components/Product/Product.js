import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const defaultImage =
	"https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

export default function Product() {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPostById = async () => {
			setIsLoading(true);

			try {
				const res = await axios.get(
					`http://localhost:3001/student-store/products/${productId}`
				);
				console.log({ res });

				if (res?.data?.product) {
					setProduct(res.data.product);
				} else {
					setError("Product not found");
				}
			} catch (err) {
				console.log({ err });
				setError("Product not found");
			}

			setIsLoading(false);
		};

		fetchPostById();
	}, [productId]);

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
			<>
				<h1 className="product-name">{product.name}</h1>

				<div className="product-body">
					<div
						className="product-image"
						style={{ backgroundImage: `url(${product.image || defaultImage})` }}
					></div>
					<>{product.description}</>
				</div>
				<div className="product-footer">
					<span className="product-price">${product.price}</span>
				</div>
			</>
		);
	};

	return (
		<div className="product">
			<div className="product-content">{renderProductContent()}</div>
		</div>
	);
}
