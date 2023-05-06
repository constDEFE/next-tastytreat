import type { FC } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import CloseButton from "./CloseButton";
import CartFooter from "./CartFooter";
import clsx from "clsx";
import CartList from "./CartList";

interface Props {
	isOpen: boolean;
	handler: () => void;
}

const CartContainer: FC<Props> = ({ isOpen, handler }) => {
	const cartItems = useAppSelector((state) => state.cart.items);

	return (
		<div onClick={handler} className={clsx("header__overlay", isOpen && "active")}>
			<div onClick={(e) => e.stopPropagation()} className={clsx("header__cart", isOpen && "active")}>
				<CloseButton handler={handler} />
				{cartItems.length ? <CartList items={cartItems} /> : <p className="cart__empty">Your cart is empty</p>}
				<CartFooter cartLength={cartItems.length} handler={handler} />
			</div>
		</div>
	);
};

export default CartContainer;
