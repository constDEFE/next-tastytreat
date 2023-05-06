"use client";

import type { FC } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

import "../styles/Total.scss";

const shipping = 30;

const Total: FC = () => {
	const cartPrice = useAppSelector((state) => state.cart.totalPrice);

	return (
		<div className="checkout__total">
			<div>
				<p>Subtotal:</p>
				<span>${cartPrice}</span>
			</div>
			<div>
				<p>Shipping:</p>
				<span>${shipping}</span>
			</div>
			<hr />
			<div>
				<p className="total__price">Total:</p>
				<span>${cartPrice + shipping}</span>
			</div>
		</div>
	);
};

export default Total;
