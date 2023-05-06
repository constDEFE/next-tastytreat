"use client";

import type { FC } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useAppSelector } from "@/hooks/useAppSelector";

import "../styles/CartButton.scss";

interface Props {
	onClick: () => void;
}

const CartButton: FC<Props> = ({ onClick }) => {
	const quantity = useAppSelector((state) => state.cart.totalQuantity);

	return (
		<button className="header__cart-button" onClick={onClick}>
			<RiShoppingBasket2Line size={28} />
			<span>{quantity}</span>
		</button>
	);
};

export default CartButton;
