import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";

export default function Home() {
	return (
		<div className="Home">
			<NavBar />
			<Products />
		</div>
	);
}
