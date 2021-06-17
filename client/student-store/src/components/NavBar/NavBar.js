import "./NavBar.css";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
	return (
		<div className="NavBar">
			<Nav justify variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/student-store">All Categories</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Clothing</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Food</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">Accessories</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">Tech</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
