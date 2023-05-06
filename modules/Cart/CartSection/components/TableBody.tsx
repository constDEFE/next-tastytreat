"use client";

import type { FC } from "react";
import Row from "./Row";
import { useAppSelector } from "@/hooks/useAppSelector";

const TableBody: FC = () => {
  const items = useAppSelector((state) => state.cart.items);

	return (
		<tbody>
			{items.map((item) => (
				<Row item={item} key={item.id} />
			))}
		</tbody>
	);
};

export default TableBody;
