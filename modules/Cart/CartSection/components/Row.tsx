import type { FC } from "react";
import Image from "next/image";
import RemoveButton from "./RemoveButton";

interface Props {
	item: CartItem;
}

const Row: FC<Props> = ({ item }) => {
	return (
		<tr>
			<td>
				<Image src={item.image1} width={64} height={64} alt="image.webp" />
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>
				<p>${item.price}</p>
			</td>
			<td>
				<p>{item.quantity}pcs</p>
			</td>
			<td>
        <RemoveButton id={item.id} />
      </td>
		</tr>
	);
};

export default Row;
