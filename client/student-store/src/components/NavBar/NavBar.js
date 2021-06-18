import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="navbar">
			<div className="content">
				<span className="logo">
					<Link to="/student-store">All Categories</Link>
				</span>
				<ul className="links">
					<li>
						<Link to="/student-store/food">Food</Link>
					</li>
					<li>
						<Link to="/student-store/technology">Technology</Link>
					</li>
					<li>
						<Link to="/student-store/clothing">Clothing</Link>
					</li>
					<li>
						<Link to="/student-store/accessories">Accessories</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
