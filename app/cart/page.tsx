import type { FC } from "react"
import CartSection from "@/modules/Cart/CartSection";
import PageHeader from "@/shared/PageHeader";

export const metadata = {
  title: "TastyTreat - Cart",
}

const page: FC = () => {
  return (
    <>
      <PageHeader title="Your Cart" />
      <CartSection />
    </>
  );
};

export default page;