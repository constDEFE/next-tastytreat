import type { FC } from "react"
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { addReview } from "@/utils/crud";

import "../styles/Reviews.scss";

interface Props {
	food: Food;
}

const Reviews: FC<Props> = ({ food }) => {
	const handleSubmit = async (review: Review) => {
		await addReview(food, review);
	}

	return (
		<div className="tab-content__reviews">
			<ul className="reviews__list">
				{food.reviews.map((review) => <Review key={review.id} review={review} />)}
			</ul>
			<ReviewForm onSubmit={handleSubmit} />
		</div>
	);
};

export default Reviews;
