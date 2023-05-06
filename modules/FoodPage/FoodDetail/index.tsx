import type { FC } from "react"
import Container from "@/shared/Container";
import Head from "./components/Head";
import Details from "./components/Details";

import "./styles/FoodDetail.scss"

interface Props {
  food: FoodDetail;
}

const FoodDetail: FC<Props> = ({ food }) => {
  return (
    <section aria-labelledby="food-detail-title" className="food-detail">
      <Container className="food-detail__container">
        <Head food={food} />
        <Details food={food} />
      </Container>
    </section>
  );
};

export default FoodDetail;