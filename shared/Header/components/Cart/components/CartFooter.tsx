"use client";

import { type FC, memo } from "react";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useAppSelector";

import "../styles/CartFooter.scss";

interface Props {
	cartLength: number;
	handler: () => void;
}

const CartFooter: FC<Props> = memo(({ cartLength, handler }) => {
	const cartPrice = useAppSelector((state) => state.cart.totalPrice);

	return (
		<div className="container__footer">
			{cartLength ? (
				<>
					<p>
						Subtotal: <span>${cartPrice}</span>
					</p>
					<Link onClick={handler} href={"/checkout"}>
						Checkout
					</Link>
				</>
			) : (
				<Link onClick={handler} href={"/foods"}>
					Continue Shopping
				</Link>
			)}
		</div>
	);
});

export default CartFooter;
