"use client";

import { type FC, useCallback, useEffect, useState } from "react";
import CartButton from "./components/CartButton";
import CartContainer from "./components/CartContainer";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setState } from "@/store/slices/cart";
import { getCachedCartState } from "@/utils/cache";

import "./styles/Cart.scss";

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setState(getCachedCartState()));
	}, []);

	return (
		<>
			<CartButton onClick={toggleCart} />
			<CartContainer isOpen={isOpen} handler={toggleCart} />
		</>
	);
};

export default Cart;
