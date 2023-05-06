import type { FC } from "react"

interface Props {
  review: Review;
}

const Review: FC<Props> = ({ review }) => {
  return (
    <li className="list__review">
      <div>
        <h5>{review.author}</h5>
        <p>{review.email}</p>
      </div>
      <p>{review.content}</p>
    </li>
  );
};

export default Review;