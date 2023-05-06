import type { FC } from "react";
import CartItem from "./CartItem";

import "../styles/CartList.scss";

interface Props {
	items: CartItem[];
}

const CartList: FC<Props> = ({ items }) => {
	return (
		<ul className="cart__list">
			{items.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default CartList;
