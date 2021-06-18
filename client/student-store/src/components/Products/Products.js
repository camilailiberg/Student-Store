import "./Products.css";
import { Link } from "react-router-dom";

const defaultImage =
	"https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

export default function Products({ product }) {
	return (
		<Link className="Products" to={`/student-store/products/${product.id}`}>
			<div
				className="product-preview-image"
				style={{ backgroundImage: `url(${product.image || defaultImage})` }}
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
	);
}
