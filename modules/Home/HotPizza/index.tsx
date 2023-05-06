import type { FC } from "react";
import Container from "@/shared/Container";
import FoodCard from "@/shared/FoodCard";

import "./styles/HotPizza.scss";

interface Props {
	foods: Food[];
}

const HotPizza: FC<Props> = ({ foods }) => {
	return (
		<section aria-labelledby="hot-pizza-title" className="hot-pizza">
			<Container>
				<h2 id="hot-pizza-title">Hot Pizza</h2>
				<ul className="hot-pizza__wrapper">
					{foods
						.filter((food) => food.category === "pizza")
						.map((food) => <FoodCard food={food} key={food.id} />
					)}
				</ul>
			</Container>
		</section>
	);
};

export default HotPizza;
