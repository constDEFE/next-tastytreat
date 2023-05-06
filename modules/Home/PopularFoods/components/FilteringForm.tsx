"use client";

import type { FC, ChangeEvent } from "react";

import "../styles/FilteringForm.scss";

interface Props {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilteringForm: FC<Props> = ({ onChange }) => {
	return (
		<form className="popular-foods__form" id="filter">
			<input onChange={onChange} form="filter" defaultChecked type="radio" name="filter" value="all" id="all" />
			<label htmlFor="all">All</label>
			<input onChange={onChange} form="filter" type="radio" name="filter" value="burger" id="burger" />
			<label htmlFor="burger">🍔<span>Burger</span></label>
			<input onChange={onChange} form="filter" type="radio" name="filter" value="pizza" id="pizza" />
			<label htmlFor="pizza">🍕<span>Pizza</span></label>
			<input onChange={onChange} form="filter" type="radio" name="filter" value="bread" id="bread" />
			<label htmlFor="bread">🥖<span>Bread</span></label>
		</form>
	);
};

export default FilteringForm;
