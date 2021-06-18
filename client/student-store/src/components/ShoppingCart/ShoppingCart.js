import React from "react";
import "./ShoppingCart.css";
import Form from "../Form/Form";
import * as FaIcons from "react-icons/fa";

export default function ShoppingCart() {
	return (
		<div className="ShoppingCart">
			<div className="top-content">
				<div className="title">
					<h2 className="title">Shopping Cart</h2>
					<div className="cart-icon">
						<FaIcons.FaShoppingBasket />
					</div>
				</div>
			</div>
			<div className="form">
				<Form />
			</div>
			<div className="bottom-content">
				<h3>Checkout Info</h3>
				<div className="payment-icons">
					<div className="individual-cards">
						<FaIcons.FaCcMastercard />
					</div>
					<div className="individual-cards">
						<FaIcons.FaCcVisa />
					</div>
					<div className="individual-cards">
						<FaIcons.FaCcPaypal />
					</div>
					<div className="individual-cards">
						<FaIcons.FaCcApplePay />
					</div>
				</div>
				<p>
					A confirmation email will be sent to you so that you can confirm this
					order. Once you have confirmed the order, it will be delivered to your
					dorm room.
				</p>
			</div>
		</div>
	);
}
