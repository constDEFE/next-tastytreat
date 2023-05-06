import { type FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import AddButton from "./components/AddButton";

import "./styles/FoodCard.scss";

interface Props {
	food: Food;
}

const FoodCard: FC<Props> = memo(({ food }) => {
	return (
		<li className="foods__item">
			<Link href={`/food/${food.id}`}>
				<div>
					<Image src={food.image1} width={256} height={256} alt="food-image.webp" draggable={false} />
					<p>{food.title}</p>
				</div>
			</Link>
			<div className="item__row">
				<span>${food.price}</span>
				<AddButton food={food} />
			</div>
		</li>
	);
});

export default FoodCard;
