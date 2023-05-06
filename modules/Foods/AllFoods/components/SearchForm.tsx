"use client";

import type { ChangeEvent, FC } from "react";

import "../styles/SearchForm.scss";

interface Props {
  value: Search;
  onChange: (value: Partial<Search>) => void;
}

const SearchForm: FC<Props> = ({ value, onChange }) => {
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ query: e.target.value });
  }
  
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange({ sort: e.target.value as Sort });
  }

	return (
		<form onSubmit={(e) => e.preventDefault()} className="all-foods__form">
			<input type="text" value={value.query} onChange={handleQueryChange} placeholder="I'm looking for..." />
			<select onChange={handleSortChange} name="filter" id="filter" defaultValue={"default"}>
				<option value="default">Default</option>
				<option value="a-z">A-Z</option>
				<option value="z-a">Z-A</option>
				<option value="high">Highest Price</option>
				<option value="low">Lowest Price</option>
			</select>
		</form>
	);
};

export default SearchForm;
