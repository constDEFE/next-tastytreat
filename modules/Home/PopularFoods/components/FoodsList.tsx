import type { FC } from "react";
import FoodCard from "@/shared/FoodCard";

import "../styles/FoodsList.scss";

interface Props {
	foods: Food[];
}

const FoodsList: FC<Props> = ({ foods }) => {
	return (
		<ul className="popular-foods__foods">
			{foods.map((food) => (
				<FoodCard key={food.id} food={food} />
			))}
		</ul>
	);
};

export default FoodsList;
