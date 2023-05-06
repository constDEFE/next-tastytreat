"use client";

import { type  FC, useState, type ChangeEvent } from "react";
import Reviews from "./Reviews";

import "../styles/Details.scss"; 

interface Props {
	food: Food;
}

const Details: FC<Props> = ({ food }) => {
	const [tab, setTab] = useState<Tab>("desc");

	const handleTab = (event: ChangeEvent<HTMLInputElement>): void => {
		setTab(event.target.value as Tab);
	};

	return (
		<div className="food-detail__details">
			<div className="details__tabs">
				<input defaultChecked type="radio" onChange={handleTab} value={"desc"} name="tab" id="tab1" />
				<label htmlFor="tab1">Description</label>
				<input type="radio" onChange={handleTab} value={"review"} name="tab" id="tab2" />
				<label htmlFor="tab2">Reviews</label>
			</div>
			<div className="details__tab-content">
				{tab === "desc" ? <p>{food.description}</p> : <Reviews food={food} />}
			</div>
		</div>
	);
};

export default Details;
