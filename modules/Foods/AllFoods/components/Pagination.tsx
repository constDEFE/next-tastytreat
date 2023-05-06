"use client";

import type { FC } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import clsx from "clsx";

import "../styles/Pagination.scss";

interface Props {
	currentPage: number;
	totalPages: number;
	onChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, onChange, totalPages }) => {
	const pages = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	const handleClick = (page: number) => () => {
		onChange(page);
	};

	return (
		<div className="all-foods__pagination">
			<button className="pagination__button" onClick={handleClick(currentPage - 1)}>
				<BsArrowLeftShort size={28} />
			</button>
			<ul>
				{pages.map((page) => (
					<li key={page}>
						<button
							className={clsx("pagination__button", currentPage === page && "active")}
							onClick={handleClick(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
			<button className="pagination__button" onClick={handleClick(currentPage + 1)}>
				<BsArrowRightShort size={28} />
			</button>
		</div>
	);
};

export default Pagination;
