import type { FC } from "react";
import Container from "@/shared/Container";
import FoodsWrapper from "./components/FoodsWrapper";

import "./styles/PopularFoods.scss";

interface Props {
	foods: Food[];
}

const PopularFoods: FC<Props> = ({ foods }) => {
	return (
		<section aria-labelledby="popular-foods-title" className="popular-foods">
			<Container className="popular-foods__container"> 
				<h2 id="popular-foods-title">Popular Foods</h2>
				<FoodsWrapper foods={foods} />
			</Container>
		</section>
	);
};

export default PopularFoods;
