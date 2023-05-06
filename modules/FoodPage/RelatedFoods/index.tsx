import type { FC } from "react";
import FoodCard from "@/shared/FoodCard";
import Container from "@/shared/Container";

import "./styles/RelatedFoods.scss";

interface Props {
	related: Food[];
}

const RelatedFoods: FC<Props> = ({ related }) => {
	return (
		<section aria-labelledby="related-foods-title" className="related-foods">
			<Container>
				<h2 id="related-foods-title">You may also like</h2>
				<ul>
					{related.map((item) => (
						<FoodCard food={item} key={item.id} />
					))}
				</ul>
			</Container>
		</section>
	);
};

export default RelatedFoods;
