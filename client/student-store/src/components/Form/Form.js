import "./Form.css";
import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Form() {
	return (
		<div className="Form">
			<div className="form-title">
				<h2>Payment Info</h2>
				<div className="money-icon">
					<FaIcons.FaMoneyCheckAlt />
				</div>
			</div>
			<div className="form-body">
				<h3>Form Body</h3>
			</div>
		</div>
	);
}
