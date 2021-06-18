import "./Home.css";
import Products from "../Products/Products";

export default function Home({ products }) {
	return (
		<div className="Home">
			<div className="allProducts">
				{products.map((product) => (
					<Products product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}
