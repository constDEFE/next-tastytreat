import type { FC } from "react";
import Container from "@/shared/Container";
import Form from "./components/Form";
import Total from "./components/Total";

import "./styles/Checkout.scss";

const CheckoutSection: FC = () => {
	return (
		<section aria-label="Checkout" className="checkout">
			<Container className="checkout__container">
				<Form />
				<Total />
			</Container>
		</section>
	);
};

export default CheckoutSection;
