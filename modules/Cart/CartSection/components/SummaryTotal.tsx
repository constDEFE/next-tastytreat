"use client";

import type { FC } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

const SummaryTotal: FC = () => {
	const total = useAppSelector((state) => state.cart.totalPrice);

	return (
		<p className="summary__total">
			Subtotal:
			<span> ${total}</span>
		</p>
	);
};

export default SummaryTotal;
