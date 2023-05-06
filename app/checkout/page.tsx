import type { FC } from "react";
import CheckoutSection from "@/modules/Checkout/CheckoutSection";
import PageHeader from "@/shared/PageHeader";

export const metadata = {
	title: "TastyTreat - Checkout"
};

const page: FC = () => {
	return (
		<>
			<PageHeader title="Checkout" />
			<CheckoutSection />
		</>
	);
};

export default page;
