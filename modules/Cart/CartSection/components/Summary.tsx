import type { FC } from "react";
import Link from "next/link";
import SummaryTotal from "./SummaryTotal";

interface Props {}

import "../styles/Summary.scss";

const Summary: FC<Props> = () => {
	return (
		<div className="cart-section__summary">
			<SummaryTotal />
			<p>Taxes and shipping will be calculated at checkout</p>
			<div className="summary__buttons">
				<Link href={"/foods"}>Continue Shopping</Link>
				<Link href={"/checkout"}>Proceed to Checkout</Link>
			</div>
		</div>
	);
};

export default Summary;
