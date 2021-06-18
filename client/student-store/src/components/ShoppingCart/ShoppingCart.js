import React from "react";
import "./ShoppingCart.css";
import Form from "../Form/Form";

export default function ShoppingCart() {
	return (
		<div className="ShoppingCart">
			<div className="top-content">
				<div className="title">
					<h2 className="title">Shopping Cart</h2>
				</div>
			</div>
			<div className="form">
				<Form />
			</div>
			<div className="bottom-content">
				<h3>Checkout Info</h3>
				<p>
					A confirmation email will be sent to you so that you can confirm this
					order. Once you have confirmed the order, it will be delivered to your
					dorm room.
				</p>
			</div>
		</div>
	);
}
