"use client";

import { type FC, memo } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addItem, removeAllItems, removeItem } from "@/store/slices/cart";
import { HiMinus, HiPlus } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import "../styles/CartItem.scss";

interface Props {
	item: CartItem;
}

const CartItem: FC<Props> = memo(({ item }) => {
	const dispatch = useAppDispatch();

	const handleIncrement = (item: Food) => () => {
		dispatch(addItem(item));
	};

	const handleDecrement = (id: number) => () => {
		dispatch(removeItem(id));
	};

	const handleRemoveAllItems = (id: number) => () => {
		dispatch(removeAllItems(id));
	};

	return (
		<li className="cart__item" key={item.id}>
			<div>
				<Image src={item.image1} width={64} height={64} alt="Item image" />
				<div>
					<p className="item__title">{item.title}</p>
					<p>
						{item.quantity}x<span>${item.totalPrice}</span>
					</p>
					<div className="content__buttons">
						<button onClick={handleIncrement(item)}>
							<HiPlus size={20} />
						</button>
						<span>{item.quantity}</span>
						<button onClick={handleDecrement(item.id)}>
							<HiMinus size={20} />
						</button>
					</div>
				</div>
			</div>
			<button onClick={handleRemoveAllItems(item.id)}>
				<IoMdClose size={24} />
			</button>
		</li>
	);
});

export default CartItem;
