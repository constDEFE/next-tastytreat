import type { FC } from "react"
import FoodCard from "@/shared/FoodCard";

import "../styles/FoodsList.scss";

interface Props {
  foods: Food[];
}

const FoodsList: FC<Props> = ({ foods }) => {
  return (
    <div className="all-foods__list">
      {foods.map((food) => <FoodCard key={food.id} food={food} />)}
    </div>
  );
};

export default FoodsList;