"use client";

import type { FC } from "react"
import Container from "@/shared/Container";
import Table from "./components/Table";
import NoItems from "./components/NoItems";
import Summary from "./components/Summary";
import { useAppSelector } from "@/hooks/useAppSelector";

import "./styles/CartSection.scss";

const CartSection: FC = () => {
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <section className="cart-section" aria-label="Cart Table">
      <Container>
        {cartQuantity ? (
          <>
            <Table />
            <Summary />
          </>
        ) : <NoItems/>}
      </Container>
    </section>
  );
};

export default CartSection;