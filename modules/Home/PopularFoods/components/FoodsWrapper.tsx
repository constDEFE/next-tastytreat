"use client";

import { type ChangeEvent, type FC, useState } from "react";
import FilteringForm from "./FilteringForm";
import FoodsList from "./FoodsList";

interface Props {
	foods: Food[];
}

const FoodsWrapper: FC<Props> = ({ foods }) => {
	const [filter, setFilter] = useState<Filter>("all");

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value as Filter);
	};

	const filterFoods = (foods: Food[], filter: Filter) => {
		if (filter === "all") return foods;
		else return foods.filter((food) => food.category === filter);
	};

	return (
		<>
			<FilteringForm onChange={handleFilterChange} />
			<FoodsList foods={filterFoods(foods, filter)} />
		</>
	);
};

export default FoodsWrapper;
