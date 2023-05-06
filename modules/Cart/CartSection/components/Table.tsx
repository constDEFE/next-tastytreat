import type { FC } from "react";
import TableBody from "./TableBody";

interface Props {}

import "../styles/Table.scss";

const Table: FC<Props> = () => {
	return (
		<table className="cart-section__table">
			<thead>
				<tr>
					<th>Image</th>
					<th>Title</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Delete</th>
				</tr>
			</thead>
			<TableBody />
		</table>
	);
};

export default Table;
