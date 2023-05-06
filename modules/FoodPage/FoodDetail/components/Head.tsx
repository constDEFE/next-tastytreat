import type { FC } from "react";
import { capitalize } from "@/utils/formatters";
import AddButton from "./AddButton";
import FoodPreview from "./FoodPreview";

import "../styles/Head.scss";

interface Props {
	food: FoodDetail;
}

const Head: FC<Props> = ({ food }) => {
	return (
		<div className="food-detail__head">
			<FoodPreview food={food} />
			<div className="head__right">
				<div>
					<h2 id="food-detail-title">{food.title}</h2>
					<p className="right__price">
						Price:
						<span>${food.price}</span>
					</p>
					<p className="right__category">
						Category:
						<span>{capitalize(food.category)}</span>
					</p>
				</div>
        <AddButton food={food} />
			</div>
		</div>
	);
};

export default Head;
