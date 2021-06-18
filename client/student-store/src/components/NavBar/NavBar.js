import "./NavBar.css";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// export default function NavBar() {
// 	return (
// 		<div className="navbar">
// 			<div className="content">
// 				<span className="logo">
// 					<Link to="/student-store">All Categories</Link>
// 				</span>
// 				<ul className="links">
// 					<li>
// 						<Link to="/student-store/food">Food</Link>
// 					</li>
// 					<li>
// 						<Link to="/student-store/technology">Technology</Link>
// 					</li>
// 					<li>
// 						<Link to="/student-store/clothing">Clothing</Link>
// 					</li>
// 					<li>
// 						<Link to="/student-store/accessories">Accessories</Link>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="navbar">
					<Link to="#" className="menu-bars">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
					<div class="categories">
						<Link to="/student-store" className="menu-bars">
							Home
						</Link>
						<Link
							to="/student-store/products/category/food"
							className="menu-bars"
						>
							Food
						</Link>
						<Link
							to="/student-store/products/category/technology"
							className="menu-bars"
						>
							Technology
						</Link>
						<Link
							to="/student-store/products/category/clothing"
							className="menu-bars"
						>
							Clothing
						</Link>
					</div>
				</div>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						<ShoppingCart />
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}
