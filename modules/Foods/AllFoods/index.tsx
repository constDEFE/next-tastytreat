"use client";

import { type FC, useCallback, useEffect, useState } from "react";
import Container from "@/shared/Container";
import SearchForm from "./components/SearchForm";
import FoodsList from "./components/FoodsList";
import Pagination from "./components/Pagination";

const initialSearch: Search = { query: "", sort: "default" };
const PER_PAGE = 12;

const sortFoods = (arr: Food[], sort: Sort): Food[] => {
	switch (sort) {
		case "default":
			return arr;
		case "a-z":
			return arr.sort((a, b) => a.title.localeCompare(b.title));
		case "z-a":
			return arr.sort((a, b) => b.title.localeCompare(a.title));
		case "high":
			return arr.sort((a, b) => b.price - a.price);
		case "low":
			return arr.sort((a, b) => a.price - b.price);
	}
};

interface Props {
	foods: Food[];
}

const AllFoods: FC<Props> = ({ foods }) => {
	const [search, setSearch] = useState<Search>(initialSearch);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = Math.ceil(foods.length / PER_PAGE);

	const filterFoods = (arr: Food[], filter: string): Food[] => {
		return arr.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase().trim()));
	};

	const handlePageChange = useCallback((page: number) => {
		if (page === 0) return;
		else if (page === totalPages + 1) return;
		else setCurrentPage(page);
	}, []);

	const handleSearchChange = useCallback((value: Partial<Search>) => {
		setSearch((prev) => ({ ...prev, ...value }));
	}, []);

	const displayedFoods = sortFoods(filterFoods(foods, search.query), search.sort).slice(
		(currentPage - 1) * PER_PAGE,
		currentPage * PER_PAGE
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	return (
		<section aria-label="All Foods" className="all-foods">
			<Container className="all-foods__container">
				<SearchForm onChange={handleSearchChange} value={search} />
				<FoodsList foods={displayedFoods} />
				<Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
			</Container>
		</section>
	);
};

export default AllFoods;
