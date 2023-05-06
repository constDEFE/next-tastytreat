import type { FC } from "react";
import Link from "next/link";

import "../styles/NoItems.scss";

const NoItems: FC = () => {
	return (
		<div className="cart-section__no-items">
			<div>
				<p>Your cart is empty</p>
				<hr />
				<Link href={"/foods"}>Continue Shopping</Link>
			</div>
		</div>
	);
};

export default NoItems;
